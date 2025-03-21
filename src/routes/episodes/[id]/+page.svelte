<script lang="ts">
	import { Icon, Short } from '$lib/components';
    import type { PageProps } from './$types';
    import {episodes,  restaurants } from '$data'
	import { tierTextClassnames } from '$constants';
	import AdjacentEpisodeButton from './AdjacentEpisodeButton.svelte';
	import EpisodeIndexButton from './EpisodeIndexButton.svelte';

    let { data }: PageProps = $props();

    let tierVariant = $derived(tierTextClassnames[data.tier]);

    let isFirst = $derived(data.id === 1);
    let isLast = $derived(data.id === episodes.length);

    let restaurant = $derived(restaurants.find(r => r.id === data?.restaurant))
</script>

<section class="flex gap-x-3 mt-8 lg:mt-10">

    <AdjacentEpisodeButton direction="prev" id={!isFirst ? data.id : null}/>

    <article class="flex gap-8 items-center p-4 lg:p-8 rounded-lg bg-stone-800 w-full">
        <div class="px-20">
            <Short id={data.vidId} />
        </div>
    
        <div class="gap-y-10 flex flex-col w-full pr-20">
            <div class="flex gap-x-6 items-center">
                <h1 class="flex-[100%]">Episode {data.id}</h1>
                <h2 class="text-stone-500 text-sm flex-none">
                    {data.date}
                </h2>
            </div>
            <div class="flex gap-x-6">
                {#if restaurant != null}
                <h2 class="flex-1/2">
                    <span class="block text-sm text-stone-500 mb-4">Restaurant</span>
                    {#if restaurant?.website}
                    <a class="text-lg" href={restaurant?.website}>{restaurant?.name}</a>
                    {:else}
                    <span class="text-lg">{restaurant?.name}</span>
                    {/if}
                </h2>
                {/if}
                <h2 class="flex-1/2">
                    <span class="block text-sm text-stone-500 mb-4">Dish</span>
                    <span class="text-lg">{data.dish}</span>
                </h2>
            </div>
            <h2 >
                <span class="block text-sm text-stone-500 mb-4">Ranking</span>
                <span class={`${tierVariant} text-5xl font-medium`}>{data.tier}</span>
            </h2>
        </div>
    
    </article>

    <AdjacentEpisodeButton direction="next" id={!isLast ? data.id : null} />
    
</section>
<ul class="flex justify-center py-10 items-center gap-1">
    {#each episodes as episode, index (episode.id)}
    {@const isCurrent = episode.id === data.id}
    <EpisodeIndexButton {isCurrent} id={episode.id} />
    {/each}
</ul>