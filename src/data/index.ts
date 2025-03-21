import extractCategoriesFromRestaurants from '$lib/utils/extractCategoriesFromRestaurants';
import restaurants from './restaurants';
import episodes from './episodes';


// EPISODES
export {default as episodes} from './episodes'

// RESTAURANTS
export {default as restaurants} from './restaurants';

// CATEGORIES
// export {default as categories} from './restaurantCategories'
export const categories = extractCategoriesFromRestaurants(restaurants);

// MAPS
export const restaurantByIdMap = new Map<RestaurantID, Restaurant>(restaurants.map(r => [r.id, r]));
export const episodeByIdMap = new Map<EpisodeID, Episode>(episodes.map(e => [e.id, e]));
export const episodeToRestaurantMap = new Map<EpisodeID, Restaurant>(episodes.map(e => [e.id, restaurants.find(r => e.restaurant === r.id)]));
export const restaurantToEpisodeMap = new Map<RestaurantID, Episode>(restaurants.map(r => [r.id, episodes.find(e => r.id === e.restaurant)]));
export const categoriesToRestaurantsMap = new Map<RestaurantCategory, Restaurant>(categories.map(c => [c, restaurants.filter(r => r.cat.includes(c))]));