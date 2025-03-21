<script lang="ts">
    import {episodes}from '$data';
	import {filterEpsByTier} from "$utils";
    import { Thumb } from './';
	import { tierBGClassnames } from "$constants";

    export let tier: Tier;
</script>

<li class="tierlist__tier flex gap-3 w-full">
    <h2 class={`tierlist__tier__heading w-14 flex-none text-2xl text-center text-black flex items-center justify-center font-medium ${tierBGClassnames[tier]}`} data-tier={tier}>{tier}</h2>

    <ul class="tierlist__tier__items flex flex-wrap align-start justify-start bg-tier-bg min-h-32 w-full my-1 gap-2 p-2 rounded-lg">
        {#each filterEpsByTier(episodes, tier) as episode}
        <Thumb id={episode.id} />
        {/each}
    </ul>
</li>