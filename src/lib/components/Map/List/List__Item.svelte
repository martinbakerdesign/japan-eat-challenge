<script lang="ts">
	import { Tiers } from "$types";
    import { restaurantToEpisodeMap } from '$data';
	import { tierTextClassnames } from "$constants";
	import { InlineLink } from "$lib/components";

    export let restaurant;

    
    const episode:Restaurant = restaurantToEpisodeMap.get(restaurant.id);
    const hasEpisode:boolean = episode != null;
    const isRanked:boolean = episode?.tier != null;
    const ranking:Tier|null = (isRanked && ![Tiers.D, Tiers.F].includes(episode?.tier)) ? episode?.tier ?? null : null;

    const bgFills = [
        "bg-neutral-700 opacity-50",
        "bg-neutral-700 hover:bg-neutral-600",
    ]
    const englishName = restaurant.name.includes('(')
        ? restaurant.name.split('(')[0]
        : restaurant.name;
    const japaneseName = restaurant.name.includes('(')
        ? restaurant.name.split('(')[1].replace(')', '')
        : null;
</script>

<li class={`relative grid items-center p-4 grid-cols-[auto_1fr_auto] gap-x-8 rounded-md mb-2 ${bgFills[+hasEpisode]}`}>
    {#if hasEpisode && isRanked}
        <InlineLink href={`/episodes/${episode?.id}`} class="row-start-1 row-end-1 col-start-1 col-end-1">Episode {episode.id}</InlineLink>
    {/if}
    <!-- ranking -->
    <div class="text-center w-10 col-start-1 col-end-2">
        {#if isRanked}
        <span class="text-lg font-semibold {tierTextClassnames[ranking]}">{ranking}</span>
        {:else}
        <span class="text-sm">-</span>
        {/if}
    </div>
    <!-- name -->
     <h3 class="w-full col-start-2 col-end-3">
        <span class="font-semibold">{englishName}</span>
        {#if japaneseName}<span class="ml-7 opacity-55">{japaneseName}</span>{/if}
     </h3>
     <!-- category -->
     <ul class="w-100 flex flex-wrap gap-1 col-start-3 col-end-4">
         {#each restaurant.cat as cat}
         <li class="py-1 px-2 rounded-sm bg-amber-600 text-sm">{cat}</li>
         {/each}
     </ul>
</li>