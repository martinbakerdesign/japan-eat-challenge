<script lang="ts">
	import { tierTextVariants, Tiers, tierBGVariants } from '$constants';
	import { episodes } from '$data';
	import { cardState, onMouseLeave, hoveredRestaurant } from './index.svelte';
	import { computePosition, offset, flip } from '@floating-ui/dom';
	import { InlineLink } from '$lib/components';

	let floating: HTMLElement, reference: HTMLElement;

	let episode = $derived(episodes.find((ep) => ep.restaurant === $hoveredRestaurant?.id) ?? null);
	let hasEpisode = $derived(episode != null);
	$effect(() => {
		setPos(cardState.pos);
	});
	$effect(() => {
		if (cardState.pos[0] !== 0 || cardState.pos[1] !== 0) return;
		cardState.show = false;
	});

	function setPos([x, y]) {
		if (reference && floating) {
			computePosition(reference, floating, {
				placement: 'top',
				middleware: [offset(8), flip()]
			}).then(({ x, y }) => {
				Object.assign(floating.style, {
					left: `${x}px`,
					top: `${y}px`
				});
			});
		}
	}
</script>

<div
	class="pointer-events-none absolute select-none"
	style="left: {cardState.pos[0]}px; top: {cardState.pos[1]}px;"
	bind:this={reference}
>
	<div class="h-1 w-1 rounded-full"></div>
</div>

<div
	bind:this={floating}
	class="hover:transition-scale absolute top-0 left-0 grid max-w-80 grid-cols-[auto_1fr] gap-x-2 rounded-lg bg-stone-600 p-2 shadow-xl hover:scale-105 hover:duration-200 items-start"
	id="map__card"
	onmouseleave={onMouseLeave}
  hidden={!cardState.show}
  aria-hidden={!cardState.show}
>
	{#if hasEpisode}
		<InlineLink href="/episodes/{episode?.id}">Episode {episode.id}</InlineLink>
		<img
			src="/assets/thumbnails/episode-{episode?.id}.webp"
			alt="Episode {episode?.id}"
			class="col-start-1 col-end-2 row-start-1 h-24 w-24 rounded-md"
		/>
	{/if}
	<div class="col-start-2 row-start-1 min-w-40 pr-2 grid gap-x-2 items-start grid-cols-[2rem_1fr] grid-rows-[auto_1fr]">
		{#if hasEpisode && ![Tiers.D, Tiers.F].includes(episode?.tier)}
			<div class="{tierBGVariants[episode?.tier]} text-xl font-semibold p-4 w-8 h-8 flex items-center justify-center text-stone-800 rounded-md col-start-1 row-start-1 col-end-2 row-end-2">
				{episode?.tier}
			</div>
		{/if}
		<h3 class="font-semibold col-start-2 row-start-1 row-end-2 col-end-3 pt-1">{$hoveredRestaurant?.name}</h3>
		{#if $hoveredRestaurant?.cat.length}
			<ul class="mt-2 flex flex-wrap gap-1 col-start-1 row-start-2 col-end-3 row-end-3">
				{#each $hoveredRestaurant?.cat as cat}
					<li class="rounded-sm bg-amber-600 px-1 py-0.5 text-xs">{cat}</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
