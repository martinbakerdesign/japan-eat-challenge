import { episodes } from "$data";

export default function doesRestaurantHaveEpisode(restaurant: Restaurant) {
    return episodes.some(ep => ep.restaurant === restaurant.id);
}