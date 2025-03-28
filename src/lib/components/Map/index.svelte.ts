import { restaurantByIdMap, restaurantToEpisodeMap } from '$data';
import { hasRestaurantBeenReviewed, routeToPage } from '$lib/utils';
import type { PlazaSection } from '$types/PlazaSection';

import { cardState, hoveredRestaurant } from './Card/index.svelte';

export { default as CenterPlazaWest } from './Map--Center-Plaza-West.svelte';

export { default as CenterPlaza } from './Map--Center-Plaza.svelte';

export { default as SanPlaza } from './Map--San-Plaza.svelte';

export { default as Card, cardState } from './Card/index.svelte';

export const restaurantPolyClassname = 'restaurant cursor-pointer hover:opacity-80';


export function getRestaurantClickHandler(sectionId: PlazaSection): Function {
	return (e: MouseEvent) => {
		const shopNumber = e.target?.id.slice(1);

		const restaurantId = `${sectionId}__${shopNumber}`;

		const restaurant = restaurantByIdMap.get(restaurantId);

		const episode = restaurantToEpisodeMap.get(restaurant?.id ?? null);

		if (!episode) return;

		routeToPage(`/episodes/${episode?.id}`, false);
	};
}

export function getRestaurantEnterHandler(sectionId: PlazaSection): Function {
	return (e: MouseEvent) => {
		const rect = (e.target as HTMLElement).getBoundingClientRect();
		const x = rect.left + rect.width / 2;
		const y = rect.top + rect.height / 2;
		const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const restaurantId = `${sectionId}__${e.target.id.slice(1)}`;

		hoveredRestaurant.set(restaurantByIdMap.get(restaurantId) ?? null);

		cardState.show = true;
		cardState.pos = [x + scrollLeft, y + scrollTop];
	};
}

export function onRestaurantLeave(e: MouseEvent) {
	if (e.relatedTarget.id === 'map__card' || e.relatedTarget?.closest('#map__card') != null) return;

	cardState.show = false;
	cardState.pos = [0, 0];
}

export function setHandlers(el: SVGGElement, sectionId: PlazaSection) {
	const restaurantPolys = Array.from(el.querySelectorAll('path, rect'));
	const clickCallback = getRestaurantClickHandler(sectionId) as EventListener;
	const enterCallback = getRestaurantEnterHandler(sectionId) as EventListener;

	for (const restaurant of restaurantPolys) {
		restaurant.addEventListener('click', clickCallback);
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
}

export function interactiveRestaurants (el: SVGElement|null, sectionId: PlazaSection, highlight: number|null, clickable: boolean) {

	if (!el) return;

	if (highlight) {
		const restaurants = el.querySelectorAll('.restaurant');
		restaurants.forEach((restaurant) => {
			const id = +(restaurant.id.slice(1));

			if (id === highlight) {
				restaurant.style.fill = '#fff'
				restaurant.classList.remove('opacity-40');
			} else if (!clickable) {
				restaurant.style.removeProperty('fill')
				restaurant.classList.add('opacity-40');
			}

		});

		if (!clickable) {
			const other = el.closest('svg')?.querySelectorAll('.other')
			other.forEach((el) => {
				el.style.removeProperty('fill')
			})
			el.classList.add('pointer-default')
			el.classList.add('pointer-events-none')
		}
	}

	if (!clickable) return;
	
	fadeUnreviewed(el, sectionId)
	setHandlers(el, sectionId)
}