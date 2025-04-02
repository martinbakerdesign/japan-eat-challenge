import { restaurantToEpisodeMap } from "$data";

export default function doesRestaurantHaveEpisode(restaurant: Restaurant|RestaurantID): boolean {
    if (typeof restaurant === 'string') {
        return restaurantToEpisodeMap.get(restaurant) != null;
    }
    return restaurantToEpisodeMap.get(restaurant.id) != null;
}