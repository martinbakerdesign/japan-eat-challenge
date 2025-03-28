export { default as Tag } from './CategoryCloud__Tag.svelte';

export { default } from './CategoryCloud.svelte';

export function getIsCurrent (category: string, selectedCategories: Map<RestaurantCategory, boolean>): boolean {
    return selectedCategories.has(category) && selectedCategories.get(category) as boolean;
}