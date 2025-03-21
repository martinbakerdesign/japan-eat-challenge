<script lang="ts">
    import { Tier } from "$lib/components";
    import { Tiers } from "$types/Tiers";

    const visibleTiers = Object.values(Tiers).slice(0, 4);
</script>

<ol>
    {#each visibleTiers as tier}
        <Tier {tier} />
    {/each}
    <div class="bg-tier-bg p-4 rounded-sm text-center w-full font-semibold mt-1">The lower tiers aren't listed because that's kinda mean.</div>
</ol>