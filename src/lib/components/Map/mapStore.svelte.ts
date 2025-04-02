import { restaurantByIdMap, restaurantToEpisodeMap } from '$data';
import { doesRestaurantHaveEpisode, routeToPage } from '$utils';
import { cardState, hoveredRestaurant } from './Card/index.svelte';
import {zoomConstraints} from '.'

export let refs = {
    restaurantsContainer: null
};

function mapStore () {
    let svgZoom,
    restaurantsRef: SVGElement|null = null,
    callbacks: {
        click: null|Function,
        clickOut: null|Function,
        enter: null|Function 
    } = {
        click: null,
        clickOut: null,
        enter: null
    };

	let zoom = $state({current: 1});

    function init (
        el: SVGElement | null,
        sectionId: PlazaSection,
        highlight: number | null,
        clickable: boolean,
        isTouch: boolean
    ) {
        if (!el) return;

        restaurantsRef = el;
    
        if (!clickable) return;
    
        isTouch
            ? initiateZoom(el?.closest('svg'))
            : disableZoom()
    
        setHandlers(el, sectionId, isTouch);
    }

    async function initiateZoom(el: SVGElement) {
        if (!el || !browser) return;
        const {default: svgPanZoom} = await import('svg-pan-zoom');
    
        svgZoom = svgPanZoom(el, {
            viewportSelector: '.zoom-window',
            controlIconsEnabled: false,
            panEnabled: true,
            zoomEnabled: true,
            dblClickZoomEnabled: false,
            mouseWheelZoomEnabled: false,
            preventMouseEventsDefault: false,
            zoomScaleSensitivity: 0.2,
            minZoom: zoomConstraints[0],
            maxZoom: zoomConstraints[1],
            fit: true,
            contain: false,
            center: true,
            refreshRate: 'auto',
        });
    }

    function setHandlers(el: SVGElement, sectionId: PlazaSection, isTouch: boolean) {
        const restaurantPolys = Array.from(el.querySelectorAll('path, rect'));
        callbacks.click = getRestaurantClickHandler(sectionId, isTouch) as EventListener;
        callbacks.enter = getRestaurantEnterHandler(sectionId) as EventListener;
    
        for (const restaurant of restaurantPolys) {
            restaurant.addEventListener('click', callbacks.click);
            if (isTouch) continue;
            restaurant.addEventListener('mouseenter', callbacks.enter);
            restaurant.addEventListener('mouseleave', onRestaurantLeave as EventListener);
        }
    }
    function getRestaurantClickHandler(sectionId: PlazaSection, isTouch: boolean): Function {
        return (e: MouseEvent) => {
            const shopNumber = e.target?.id;
    
            const restaurantId = `${sectionId}__${shopNumber}`;
    
            const restaurant = restaurantByIdMap.get(restaurantId);
    
            const episode = restaurantToEpisodeMap.get(restaurant?.id ?? null);
    
            if (!episode) return;
    
            if (isTouch) {
                callbacks.clickOut && document.removeEventListener('click', callbacks.clickOut);
                callbacks.clickOut = null;
                // open the card
                hoveredRestaurant.set(restaurantByIdMap.get(restaurantId) ?? null);
                cardState.pos = getRestaurantCenter(e.target);
                cardState.show = true;
    
                // handle click outside of restaurants
                callbacks.clickOut = getClickOutHandler(e.target);
                document.addEventListener('click', callbacks.clickOut);
    
                return;
            }
    
            routeToPage(`/episodes/${episode?.id}`, false);
        };
    }
    function removeHandlers () {
        if (restaurantsRef) {
            const restaurantPolys = Array.from(restaurantsRef?.querySelectorAll('path, rect'));
        
            for (const restaurant of restaurantPolys) {
                callbacks.click && restaurant.removeEventListener('click', callbacks.click);
                callbacks.enter && restaurant.removeEventListener('mouseenter', callbacks.enter);
                restaurant.addEventListener('mouseleave', onRestaurantLeave as EventListener);
            }
        }
        callbacks.clickOut && document.removeEventListener('click', callbacks.clickOut);
        
        callbacks.click = null;
        callbacks.enter = null;
        callbacks.clickOut = null;
    }
    
    function disableZoom() {
        if (!svgZoom) return;
        svgZoom.zoom(1);
        svgZoom.center()
        svgZoom.reset();
        svgZoom && svgZoom.destroy();
        svgZoom = null;
        zoom.current = 1;
    }
    function zoomIn() {
        zoom.current = Math.min(zoomConstraints[1], zoom.current + 1);
    
        svgZoom && svgZoom.zoom(zoom.current)
    }
    function zoomOut() {
        zoom.current = Math.max(zoomConstraints[0], zoom.current - 1);
    
        svgZoom && svgZoom.zoom(zoom.current)
    }

    function destroy () {
        removeHandlers();
        disableZoom()
        restaurantsRef = null;
    }

	return {
        init,
        destroy,
		zoom,
        zoomIn,
        zoomOut,
	}
}

function getClickOutHandler(target: EventTarget) {
	return (e: MouseEvent) => {
		if (e.target === target || e.target.closest('#map__card') != null) return;
		cardState.show = false;
		cardState.pos = [0, 0];
	};
}

function getRestaurantCenter(target): [number, number] {
	const rect = (target as HTMLElement).getBoundingClientRect();
	const x = rect.left + rect.width / 2;
	const y = rect.top + rect.height / 2;
	const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	return [x + scrollLeft, y + scrollTop];
}

function getRestaurantEnterHandler(sectionId: PlazaSection): Function {
	return (e: MouseEvent) => {
		const restaurantId = `${sectionId}__${e.target.id}`;

		hoveredRestaurant.set(restaurantByIdMap.get(restaurantId) ?? null);

		cardState.show = true;
		cardState.pos = getRestaurantCenter(e.target);
	};
}

function onRestaurantLeave(e: MouseEvent) {
	if (e.relatedTarget.id === 'map__card' || e.relatedTarget?.closest('#map__card') != null) return;

	cardState.show = false;
	cardState.pos = [0, 0];
}

export default mapStore;