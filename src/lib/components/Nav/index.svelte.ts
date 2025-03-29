
import { onNavigate } from '$app/navigation';

export {default as Item} from './Nav__Item.svelte'

export {default as TouchToggle} from './Nav__Touch-Toggle.svelte'

export {default as default} from './Nav.svelte'

export const isTouchMenuOpen = $state({current: false});

export function toggleTouchMenu () {
    isTouchMenuOpen.current = !isTouchMenuOpen.current;
}

import { MediaQuery } from 'svelte/reactivity';
export const isTouch = new MediaQuery('max-width: 767px');

export function hideTouchMenu () {
    isTouchMenuOpen.current = false;
}