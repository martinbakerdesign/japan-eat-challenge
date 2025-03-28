<script lang="ts">
	import { CenterPlaza, CenterPlazaWest, Icon, SanPlaza, Short } from '$lib/components';
	import { episodes, restaurants } from '$data';
	import { PlazaSectionNames, PlazaSections, tierBGVariants, tierTextVariants } from '$constants';
	import AdjacentEpisodeButton from './AdjacentEpisodeButton.svelte';
	import EpisodeIndexButton from './EpisodeIndexButton.svelte';
	import { Tag } from '$lib/components';

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
</script>

<article class="mb-2 grid grid-cols-[auto_1fr] w-full gap-2">
	<div class="w-80 overflow-hidden rounded-2xl h-full">
		<Short id={data.vidId} class="w-full h-full" />
	</div>

	<div
		class="grid h-full w-full grid-cols-[1fr_auto] grid-rows-[auto_auto_1fr_auto] items-start gap-8 rounded-2xl bg-stone-800 p-3 gap-x-16"
	>
		<div class="flex justify-between w-full items-center gap-x-40 text-xs text-stone-500 col-start-1 row-start-1 mt-4 ml-6">
			<h1>Episode {data.id}</h1>
			<h2>
				{data.date}
			</h2>

		</div>

        {#if knownPlazaSection}
            <a
                class="relative flex w-80 flex-col items-center justify-center overflow-hidden rounded-xl bg-stone-900/15 p-8 col-start-2 row-start-1 row-end-5 h-full hover:bg-amber-800/15"
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

		<div class="flex w-full flex-col justify-center col-start-1 row-start-2 self-end mt-8 ml-6">
			<div class="grid grid-cols-[auto_1fr] items-start gap-x-2">
				<h2
					class="{tierBGVariants[
						data.tier
					]} flex flex-none items-center rounded-lg px-6 py-4 text-center"
				>
					<span class="text-4xl font-bold text-stone-800">{data.tier}</span>
				</h2>

				{#if restaurant != null}
					{#if restaurant?.website}
						<h2 class="flex h-full w-full text-3xl font-medium">
							<a
								class="grid min-h-full w-full grid-cols-[1fr_auto] items-center gap-x-2 rounded-lg fill-current px-6 py-4 pr-0 hover:text-amber-500"
                                target="_blank"
								href={restaurant?.website}
								>{restaurant?.name} <Icon icon="new-window--54" class="inline-flex w-5" /></a
							>
						</h2>
					{:else}
						{restaurant?.name}
						<h2 class="text-3xl font-medium">
							{restaurant?.name}
						</h2>
					{/if}
				{/if}
			</div>

			<h2 class="mt-4 text-lg font-light">
				🍝 {data.dish}
			</h2>
		</div>

        <ul class="flex flex-wrap gap-1 row-start-4 col-start-1 ml-6 mb-4">
            {#each restaurant.cat as category}
                <Tag>{category}</Tag>
            {/each}
        </ul>
	</div>
</article>

<div class="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 rounded-full bg-stone-300/10 p-2">
	<AdjacentEpisodeButton direction="prev" id={!isFirst ? data.id : null} />
	<ul class="flex items-center justify-center gap-1">
		{#each episodes as episode, index (episode.id)}
			{@const isCurrent = episode.id === data.id}
			<EpisodeIndexButton {isCurrent} id={episode.id} />
		{/each}
	</ul>
	<AdjacentEpisodeButton direction="next" id={!isLast ? data.id : null} />
</div>
