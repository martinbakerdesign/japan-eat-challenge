import { writable } from 'svelte/store';

export {default} from './Card.svelte'

export const cardState = $state<{
    pos: [number, number],
    show: boolean
}>({
    pos: [0,0],
    show: false
})

export function onMouseLeave () {
    cardState.show = false;
    cardState.pos = [0,0];
}

export const hoveredRestaurant = writable<Restaurant|null>(null);