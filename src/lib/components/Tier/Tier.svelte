<script lang="ts">
    import {episodes}from '$data';
	import {cn, filterEpsByTier} from "$utils";
    import { Thumb } from './';
	import { tierBGVariants } from "$constants";

    export let tier: Tier;
</script>

<li class="tierlist__tier flex flex-col md:flex-row gap-2 w-full rounded-2xl bg-tier-bg/50 p-2">
    <h2 class={cn("tierlist__tier__heading w-full p-3 md:p-0 md:w-20 flex-none text-2xl text-center text-stone-800 flex items-center justify-center rounded-lg font-bold", tierBGVariants[tier])} data-tier={tier}>{tier}</h2>

    <ul class="tierlist__tier__items min-h-32 w-full gap-2 grid-cols-2 md:grid-cols-4 xl:grid-cols-8 grid">
        {#each filterEpsByTier(episodes, tier) as episode}
        <Thumb id={episode.id} />
        {/each}
    </ul>
</li>