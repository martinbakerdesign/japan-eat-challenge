import { restaurantToEpisodeMap } from '$data';
import doesRestaurantHaveEpisode from '$utils/doesRestaurantHaveEpisode';

export {default as default} from './List.svelte'

export {default as ListItem} from './List__Item.svelte'

export const bgFillVariants = [
    // no episode
    "bg-neutral-700 opacity-50",
    // has episode
    "bg-neutral-700 hover:bg-neutral-600",
]

export function sortRestaurants (restaurants: Restaurant[]|null|undefined): Restaurant[] {
    return !restaurants
    ? []
    : restaurants
        .sort((a, b) => {
            const aHasEpisode = doesRestaurantHaveEpisode(a);
            const bHasEpisode = doesRestaurantHaveEpisode(b);
            return (aHasEpisode && bHasEpisode)
                ? (restaurantToEpisodeMap.get(a.id).id - restaurantToEpisodeMap.get(b.id).id)
                : aHasEpisode ? -1 : 1;
        })
}