import { restaurantToEpisodeMap } from "$data";

export default function hasRestaurantBeenReviewed(restaurantId: string) {
	return restaurantToEpisodeMap.get(restaurantId) != null;
}