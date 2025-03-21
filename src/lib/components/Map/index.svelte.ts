import { restaurantByIdMap, restaurantToEpisodeMap } from '$data';
import { hasRestaurantBeenReviewed, routeToPage } from '$lib/utils';
import type { PlazaSection } from '$types/PlazaSections';

import { cardState, hoveredRestaurant } from './Card/index.svelte';

export { default as CenterPlazaWest } from './Map--Center-Plaza-West.svelte';
export { default as CenterPlaza } from './Map--Center-Plaza.svelte';
export { default as SanPlaza } from './Map--San-Plaza.svelte';

export { default as Card } from './Card/index.svelte';

export { default as List } from './List';

function getRestaurantByCoords(coords: ShopCoords): Shop | null {
	const id = coords.join('__');
	return restaurantByIdMap.get(id) ?? null;
}

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
	}
}

export const restaurantPolyClassname = 'restaurant cursor-pointer hover:opacity-80';

export function interactiveRestaurants (el:SVGGElement, sectionId: PlazaSection) {
    fadeUnreviewed(el, sectionId)
    setHandlers(el, sectionId)
}