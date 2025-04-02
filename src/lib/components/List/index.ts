import { restaurantToEpisodeMap } from '$data';

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
            const aEpisode = restaurantToEpisodeMap.get(a.id);
            const bEpisode = restaurantToEpisodeMap.get(b.id);
            const aHasEpisode = aEpisode?.id != null;
            const bHasEpisode = bEpisode?.id != null;

            return (aHasEpisode && bHasEpisode)
                ? (aEpisode.id - bEpisode.id)
                : aHasEpisode ? -1 : 1;
        })
}