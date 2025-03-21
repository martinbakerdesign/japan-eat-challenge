import { SvelteMap } from 'svelte/reactivity';
import { categories } from '$data';

export const selectedCategories = new SvelteMap(categories.map(c => [c, false]))

export function toggle (e: MouseEvent) {
    const category = e.target.closest('button').dataset.category;
    selectedCategories.set(category, !selectedCategories.get(category));
}

function removeEmojis(str: string): string {
    return str.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim()
}

export default {
    selectedCategories,
    toggle
}