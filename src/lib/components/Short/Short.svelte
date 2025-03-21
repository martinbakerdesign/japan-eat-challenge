<script lang="ts">
	import { onMount } from 'svelte';
	import { updatePlayer, playerId, setupPlayer } from '.'
	import { validateShortId } from '$utils';

	export let id: ShortID|null|undefined;

	onMount(setupPlayer(id));

	$: updatePlayer(id);
	
    const vidAspect = [9,16];
    const vidWidth = 320;
    const vidHeight = vidWidth * vidAspect[1] / vidAspect[0];
	
	const config = JSON.stringify({ autoplay: false,ratio: "9:16", controls: ['play', 'progress', 'current-time', 'mute', 'fullscreen'] })
    
	$: idIsValid = validateShortId(id);
	$: src = idIsValid ? `https://www.youtube.com/embed/${id}` : null;
</script>

<div class="w-[320px] aspect-short flex-none grid items-center bg-black" >
	{#if !idIsValid}
	<div>uh oh!</div>
	{:else}
	<div class="w-full h-full" id={playerId} data-plyr-config={config}>
		<iframe
			{src}
			width={vidWidth}
			height={vidHeight}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
            class="w-full h-full aspect-short"
		/>
	</div>
	{/if}
</div>

<style>
	@import "https://cdn.jsdelivr.net/npm/plyr@3.7.8/dist/plyr.css";
</style>