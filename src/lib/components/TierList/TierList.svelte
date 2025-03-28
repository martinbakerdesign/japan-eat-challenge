<script lang="ts">
    import { Tier } from "$lib/components";
    import { visibleTiers } from '.'
</script>

<ol class="flex flex-col gap-y-2">
    {#each visibleTiers as tier}
        <Tier {tier} />
    {/each}

    <div class="flex justify-center w-full rounded-2xl bg-tier-bg/50 p-8 text-sm text-white/50 text-center font-medium">The lower tiers aren't listed because that's kinda mean.</div>
</ol>