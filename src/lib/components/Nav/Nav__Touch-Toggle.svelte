<script lang="ts">
	import { onNavigate } from '$app/navigation';
    import { isTouchMenuOpen, toggleTouchMenu, isTouch, hideTouchMenu } from './index.svelte';

	onNavigate(hideTouchMenu);
</script>

<button
	class="block md:hidden rounded-lg p-3 focus:outline-none border-stone-600/75 border-[1px] {isTouchMenuOpen.current ? 'bg-stone-800' : ''}"
	onclick={toggleTouchMenu}
	aria-label="Toggle menu"
	aria-expanded={isTouchMenuOpen.current}
    aria-controls="nav-menu"
>
	<div class="relative flex h-5 w-6 flex-col justify-between">
		<span
			class={`h-0.5 w-full bg-white transition-transform ${isTouchMenuOpen.current ? 'translate-y-2 rotate-45' : ''}`}
		></span>
		<span
			class={`h-0.5 w-full bg-white transition-opacity ${isTouchMenuOpen.current ? 'opacity-0' : ''}`}
		></span>
		<span
			class={`h-0.5 w-full bg-white transition-transform ${isTouchMenuOpen.current ? '-translate-y-2 -rotate-45' : ''}`}
		></span>
	</div>
</button>
