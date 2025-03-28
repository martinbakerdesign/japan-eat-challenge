import { SvelteMap } from 'svelte/reactivity';
import { categories, restaurants as allRestaurants } from '$data';

export {default as CategoryCloud} from './CategoryCloud'

export const selectedCategories = new SvelteMap(categories.map(c => [c, false]))

export function toggle (e: MouseEvent) {
    const category = e.target?.closest('button').dataset.category;
    if (!category) return;
    selectedCategories.set(category, !selectedCategories.get(category));
}

export function getFilteredRestaurants (selectedCategories: SvelteMap<string, boolean>): Restaurant[] {
    return allRestaurants.filter(r => r.cat.some(c => selectedCategories.get(c)))
}

export default {
    selectedCategories,
    toggle,
    getFilteredRestaurants
}