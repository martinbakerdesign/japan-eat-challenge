import { restaurantByIdMap, restaurantToEpisodeMap } from '$data';
import { hasRestaurantBeenReviewed, routeToPage } from '$lib/utils';
import type { PlazaSection } from '$types/PlazaSection';

import { cardState, hoveredRestaurant } from './Card/index.svelte';
import { browser } from '$app/environment';

export { default as CenterPlazaWest } from './Map--Center-Plaza-West.svelte';

export { default as CenterPlaza } from './Map--Center-Plaza.svelte';

export { default as SanPlaza } from './Map--San-Plaza.svelte';

export { default as Zoom } from './Map__Zoom.svelte';

export { default as Card, cardState } from './Card/index.svelte';

export const restaurantPolyClassname = 'restaurant cursor-pointer hover:opacity-80';

let clickOutHandler: null | undefined | Function;

function getClickOutHandler(target: EventTarget) {
	return (e: MouseEvent) => {
		if (e.target === target || e.target.closest('#map__card') != null) return;
		cardState.show = false;
		cardState.pos = [0, 0];
	};
}

export function getRestaurantClickHandler(sectionId: PlazaSection, isTouch: boolean): Function {
	return (e: MouseEvent) => {
		const shopNumber = e.target?.id.slice(1);

		const restaurantId = `${sectionId}__${shopNumber}`;

		const restaurant = restaurantByIdMap.get(restaurantId);

		const episode = restaurantToEpisodeMap.get(restaurant?.id ?? null);

		if (!episode) return;

		if (isTouch) {
			clickOutHandler && document.removeEventListener('click', clickOutHandler);
			clickOutHandler = null;
			// open the card
			hoveredRestaurant.set(restaurantByIdMap.get(restaurantId) ?? null);
			cardState.pos = getRestaurantCenter(e.target);
			cardState.show = true;

			// handle click outside of restaurants
			clickOutHandler = getClickOutHandler(e.target);
			document.addEventListener('click', clickOutHandler);

			return;
		}

		routeToPage(`/episodes/${episode?.id}`, false);
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

export function getRestaurantEnterHandler(sectionId: PlazaSection): Function {
	return (e: MouseEvent) => {
		const restaurantId = `${sectionId}__${e.target.id.slice(1)}`;

		hoveredRestaurant.set(restaurantByIdMap.get(restaurantId) ?? null);

		cardState.show = true;
		cardState.pos = getRestaurantCenter(e.target);
	};
}

export function onRestaurantLeave(e: MouseEvent) {
	if (e.relatedTarget.id === 'map__card' || e.relatedTarget?.closest('#map__card') != null) return;

	cardState.show = false;
	cardState.pos = [0, 0];
}

export function setHandlers(el: SVGGElement, sectionId: PlazaSection, isTouch: boolean) {
	const restaurantPolys = Array.from(el.querySelectorAll('path, rect'));
	const clickCallback = getRestaurantClickHandler(sectionId, isTouch) as EventListener;
	const enterCallback = getRestaurantEnterHandler(sectionId) as EventListener;

	for (const restaurant of restaurantPolys) {
		restaurant.addEventListener('click', clickCallback);
		if (isTouch) continue;
		restaurant.addEventListener('mouseenter', enterCallback);
		restaurant.addEventListener('mouseleave', onRestaurantLeave as EventListener);
	}
}

export function fadeUnreviewed(el: SVGGElement, sectionId: PlazaSection) {
	const restaurantPolys = el.querySelectorAll('.restaurant');

	for (const restaurant of restaurantPolys) {
		const restaurantId = `${sectionId}__${restaurant.id.slice(1)}`;

		if (hasRestaurantBeenReviewed(restaurantId)) continue;

		restaurant.classList.add('opacity-50');
		restaurant.classList.add('cursor-default');
	}
}

export let refs = {
	restaurantsContainer: null
};

export function interactiveRestaurants(
	el: SVGElement | null,
	sectionId: PlazaSection,
	highlight: number | null,
	clickable: boolean,
	isTouch: boolean
) {
	if (!el) return;

	if (highlight) {
		const restaurants = el.querySelectorAll('.restaurant');
		restaurants.forEach((restaurant) => {
			const id = +restaurant.id.slice(1);

			if (id === highlight) {
				restaurant.style.fill = '#fff';
				restaurant.classList.remove('opacity-40');
			} else if (!clickable) {
				restaurant.style.removeProperty('fill');
				restaurant.classList.add('opacity-40');
			}
		});

		if (!clickable) {
			const other = el.closest('svg')?.querySelectorAll('.other');
			other.forEach((el) => {
				el.style.removeProperty('fill');
			});
			el.classList.add('pointer-default');
			el.classList.add('pointer-events-none');
		}
	}

	if (!clickable) return;

	isTouch ? initiateZoom(el?.closest('svg')) : disableZoom(el?.closest('svg'))

	fadeUnreviewed(el, sectionId, isTouch);
	setHandlers(el, sectionId, isTouch);
}

let svgZoom;

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

function disableZoom(el: SVGElement) {
	if (!svgZoom) return;
	svgZoom.zoom(1);
	svgZoom.center()
	svgZoom.reset();
	svgZoom && svgZoom.destroy();
	svgZoom = null;
}

export const zoom = $state({ current: 1 });

export const zoomConstraints = [1, 5];

export function zoomIn() {
	zoom.current = Math.min(zoomConstraints[1], zoom.current + 1);

	svgZoom && svgZoom.zoom(zoom.current)
}
export function zoomOut() {
	zoom.current = Math.max(zoomConstraints[0], zoom.current - 1);

	svgZoom && svgZoom.zoom(zoom.current)
}
