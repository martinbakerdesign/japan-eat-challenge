import extractCategoriesFromRestaurants from '$lib/utils/extractCategoriesFromRestaurants';
import restaurants from './restaurants';
import episodes from './episodes';

// EPISODES
export { default as episodes } from './episodes';

// RESTAURANTS
export { default as restaurants } from './restaurants';

// CATEGORIES
export const categories = extractCategoriesFromRestaurants(restaurants);

// MAPS
export const restaurantByIdMap = new Map<RestaurantID, Restaurant>(
	restaurants.map((r) => [r.id, r])
);
export const episodeByIdMap = new Map<EpisodeID, Episode>(episodes.map((e) => [e.id, e]));
export const episodeToRestaurantMap = new Map<EpisodeID, Restaurant>(getEpisodeToRestaurantMap(episodes, restaurants));
export const restaurantToEpisodeMap = new Map<RestaurantID, Episode|null>(getRestaurantToEpisodeMap(restaurants, episodes));
export const categoriesToRestaurantsMap = new Map<RestaurantCategory, Restaurant[]>(getCategoryToRestaurantsMap(categories, restaurants));


function getEpisodeToRestaurantMap(episodes: Episode[], restaurants: Restaurant[]): [EpisodeID, Restaurant][] {
    return episodes.map((e) =>
		[e.id, restaurants.find((r) => e.restaurant === r.id)] as [EpisodeID, Restaurant]
	).filter(([e, r]) => r != null)
}
function getRestaurantToEpisodeMap(restaurants: Restaurant[], episodes: Episode[] ): [RestaurantID, Episode|null][] {
    return restaurants.map((r) =>
		[r.id, episodes.find((e) => e.restaurant === r.id)] as [RestaurantID, Episode|null]
	).filter(([r, e]) => e != null)
}
function getCategoryToRestaurantsMap(categories: RestaurantCategory[], restaurants: Restaurant[]): [RestaurantCategory, Restaurant[]][] {
    return categories.map((c) => [c, restaurants.filter((r) => r.cat.includes(c))])
}