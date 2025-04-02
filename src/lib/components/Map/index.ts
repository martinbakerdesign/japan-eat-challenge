import { restaurantByIdMap, restaurantToEpisodeMap } from '$data';
import { doesRestaurantHaveEpisode, routeToPage } from '$lib/utils';
import type { PlazaSection } from '$types/PlazaSection';

import { cardState, hoveredRestaurant } from './Card/index.svelte';
import { browser } from '$app/environment';

export {default as default} from './Map.svelte';

export { default as mapDefinitions } from './mapDefinitions'

export { default as MapShape } from './Map__Shape.svelte';

// export { default as CenterPlazaWest } from './Map--Center-Plaza-West.svelte';

// export { default as CenterPlaza } from './Map--Center-Plaza.svelte';

// export { default as SanPlaza } from './Map--San-Plaza.svelte';

export { default as Zoom } from './Map__Zoom.svelte';

export { default as Card, cardState } from './Card/index.svelte';


export const restaurantPolyClassname = 'restaurant cursor-pointer hover:opacity-80';

import mapStore from './mapStore.svelte'

export const zoomConstraints = [1, 5];

export const store = mapStore();