
export {default as Item} from './Nav__Item.svelte'

export {default as TouchToggle} from './Nav__Touch-Toggle.svelte'

export {default as Menu} from './Nav__Menu.svelte'

export {default as default} from './Nav.svelte'

export const isTouchMenuOpen = $state({current: false});

export function toggleTouchMenu () {
    isTouchMenuOpen.current = !isTouchMenuOpen.current;
    document.querySelector('#nav-menu')?.classList[isTouchMenuOpen.current ? 'remove' : 'add']('hidden');
    document.querySelector('#nav-menu')?.classList[isTouchMenuOpen.current ? 'add' : 'remove']('flex');
}

import { MediaQuery } from 'svelte/reactivity';
export const isTouch = new MediaQuery('max-width: 767px');

export function hideTouchMenu () {
    isTouchMenuOpen.current = false;
}