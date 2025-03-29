<script lang="ts">
	import { tierBGVariants, Tiers } from '$constants';
	import { restaurantToEpisodeMap } from '$data';
	import { tierTextVariants } from '$constants';
	import { InlineLink } from '$lib/components';
	import { splitNameIntoEnglishAndJapanese } from '$utils';
	import { bgFillVariants } from './';
	import Tag from '../Tag';

	export let restaurant: Restaurant | null | undefined;

	const episode: Restaurant = restaurantToEpisodeMap.get(restaurant.id);
	const hasEpisode: boolean = episode != null;
	const isRanked: boolean = episode?.tier != null;
	const ranking: Tier | null =
		isRanked && ![Tiers.D, Tiers.F].includes(episode?.tier) ? (episode?.tier ?? null) : null;

	const [englishName, japaneseName] = splitNameIntoEnglishAndJapanese(restaurant.name);
</script>

<li
	class={`relative mb-2 grid grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] items-center gap-x-8 rounded-lg p-2 ${bgFillVariants[+hasEpisode]}`}
>
	{#if hasEpisode && isRanked}
		<InlineLink
			href={`/episodes/${episode?.id}`}
			class="col-start-1 col-end-1 row-start-1 row-end-1">Episode {episode.id}</InlineLink
		>
	{/if}

	<!-- ranking -->
	<div
		class="text-md col-start-1 col-end-2 row-start-1 flex w-10 items-center justify-center text-center font-semibold text-stone-800 {isRanked ? tierBGVariants[
			ranking
		] ?? 'bg-transparent' : 'bg-neutral-600/50'} rounded-md px-4 py-2 w-10 h-10"
	>
		{#if isRanked}
			{ranking}
		{:else}
			-
		{/if}
	</div>

	<!-- name -->
	<h3 class="col-start-2 row-start-1 col-end-3 w-full">
		<span class="font-semibold">{englishName}</span>
		{#if japaneseName}<span class="ml-7 opacity-55">{japaneseName}</span>{/if}
	</h3>

	<!-- category -->
	<ul class="col-start-2 row-start-2 lg:row-start-1 lg:col-start-3 lg:col-end-4 flex flex-wrap gap-1 w-full lg:w-60 2xl:w-100">
		{#each restaurant.cat as cat}
			<Tag>{cat}</Tag>
		{/each}
	</ul>
</li>
