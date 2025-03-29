<script lang="ts">
	import { CenterPlaza, CenterPlazaWest, Icon, SanPlaza, Short } from '$lib/components';
	import { episodes, restaurants } from '$data';
	import { PlazaSectionNames, PlazaSections, tierBGVariants, tierTextVariants } from '$constants';
	import AdjacentEpisodeButton from './AdjacentEpisodeButton.svelte';
	import EpisodeIndexButton from './EpisodeIndexButton.svelte';
	import { Tag } from '$lib/components';
	import { isTouch } from '$lib/components/Nav/index.svelte';
	import { routeToPage } from '$utils';

	let { data }: { data: Episode } = $props();

	let isFirst = $derived(data.id === 1);
	let isLast = $derived(data.id === episodes.length);
	let restaurant = $derived(restaurants.find((r) => r.id === data?.restaurant));
	let plazaSection = $derived(restaurant.id.split('__')[0]);
	let Map = $derived(
		{
			'center-plaza': CenterPlaza,
			'san-plaza': SanPlaza,
			'center-plaza-west': CenterPlazaWest
		}[plazaSection]
	);
	let knownPlazaSection = $derived(PlazaSections.includes(plazaSection));
	let highlight = $derived(knownPlazaSection ? +restaurant?.id.split('__')[1] : null);

	function changeEpisode ({target}: InputEvent) {
		routeToPage(`/episodes/${target.value}`, false);
	}
</script>

<article
	class="mb-2 grid w-full grid-rows-[auto_auto] gap-2 overflow-hidden md:grid-cols-[auto_1fr] md:grid-rows-1"
>
	<div class="h-full w-full overflow-hidden rounded-2xl md:w-64 lg:w-80">
		<Short id={data.vidId} class="h-full w-full" />
	</div>

	<div
		class="grid md:h-full w-full grid-cols-1 md:grid-cols-[1fr_auto] grid-rows-[auto_auto_1fr_auto] items-start gap-4 gap-x-16 rounded-2xl bg-stone-800 p-3 md:gap-8 overflow-hidden"
	>
		<div
			class="col-start-1 row-start-1 flex w-full items-center justify-between text-xs text-stone-500 px-2 mt-2 md:pl-6 md:pr-0 md:mt-4"
		>
			<h1>Episode {data.id}</h1>
			<h2>
				{data.date}
			</h2>
		</div>

		{#if knownPlazaSection}
			<a
				class="relative col-start-1 row-start-4 md:col-start-2 md:row-start-1 md:row-end-5 flex h-full w-full aspect-[4/3] md:aspect-auto md:w-80 flex-col items-center justify-center overflow-hidden rounded-xl bg-stone-900/15 p-8 hover:bg-amber-800/15 zoom-window"
				href="/plaza-map/{plazaSection}?highlight={highlight}"
			>
				<h3
					class="absolute inset-6 text-center text-xs font-medium tracking-wider uppercase opacity-35 select-none"
				>
					{PlazaSectionNames[plazaSection]}
				</h3>
				<Map {highlight} />
			</a>
		{/if}

		<div
			class="col-start-1 row-start-2 mt-4 md:mt-8 px-2 md:pl-6 md:pr-0 flex w-full flex-col justify-center self-end"
		>
			<div class="grid grid-cols-[auto_1fr] items-start gap-x-2">
				<h2
					class="{tierBGVariants[
						data.tier
					]} flex flex-none items-center rounded-lg px-4 py-2 text-center md:px-6 md:py-4"
				>
					<span class="text-3xl font-bold text-stone-800 md:text-4xl">{data.tier}</span>
				</h2>

				{#if restaurant != null}
					<h2 class="flex h-full w-full text-2xl font-medium md:text-3xl">
						{#if restaurant?.website}
							<a
								class="grid min-h-full w-full grid-cols-[1fr_auto] items-center gap-x-2 rounded-lg fill-current pl-4 pr-0 py-2 hover:text-amber-500 md:px-6 md:py-4"
								target="_blank"
								href={restaurant?.website}
								>{restaurant?.name} <Icon icon="new-window--54" class="inline-flex w-5" /></a
							>
						{:else}
							{restaurant?.name}
						{/if}
					</h2>
				{/if}
			</div>

			<h2 class="mt-3 md:mt-4 text-md md:text-lg font-light">
				🍝 {data.dish}
			</h2>
		</div>

		<ul class="col-start-1 row-start-3 my-4 md:mt-0 md:mb-4 px-2 md:pl-6 md:pr-0 flex flex-wrap gap-1">
			{#each restaurant.cat as category}
				<Tag>{category}</Tag>
			{/each}
		</ul>
	</div>
</article>

<div class="grid grid-cols-[auto_1fr_auto] items-center gap-x-2 md:gap-x-4 rounded-full bg-stone-300/10 p-2 sticky bottom-2 backdrop-blur-2xl md:backdrop-blur-none md:static z-10">
	<AdjacentEpisodeButton direction="prev" id={!isFirst ? data.id : null} />
	{#if !isTouch.current}
	<ul class="items-center justify-center gap-1 hidden md:flex">
		{#each episodes as episode, index (episode.id)}
			{@const isCurrent = episode.id === data.id}
			<EpisodeIndexButton {isCurrent} id={episode.id} />
		{/each}
	</ul>
	{:else}
	<select class="w-full text-center bg-stone-800/30 md:hidden h-full rounded-lg p-2 backdrop-blur-lg" value={data.id} onchange={changeEpisode}>
		{#each episodes as episode, index (episode.id)}
		<option value={episode.id} class="text-center w-full hover:bg-amber-500">Episode {episode.id}</option>
		{/each}
	</select>
	{/if}
	<AdjacentEpisodeButton direction="next" id={!isLast ? data.id : null} />
</div>

<style>
	select {
		&, &::picker(select) {
			appearance: base-select;    
		}
		&::picker-icon {
			display: none;
		}
	}
</style>
