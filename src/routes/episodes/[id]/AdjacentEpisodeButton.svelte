<script lang="ts">
	import { Icon } from "$lib/components";

    interface Props {
        direction: 'prev' | 'next',
        id: number|null|undefined,
    }
    let {
        direction,
        id,
    }: Props = $props();

    const icon = $derived(direction === 'prev' ? 'circle-chevron-left--24' : 'circle-chevron-right--24');
    const hrefId = $derived(id ? (direction === 'prev' ? id - 1 : id + 1) : null);
</script>

<div>
    {#if !id}
    <Icon {icon} class="fill-current w-10 opacity-30" />
    {:else}
    <a href={`/episodes/${hrefId}`}  class="flex flex-col items-center gap-y-4">
        <Icon {icon} class="fill-current w-10 hover:fill-amber-500" />
        <!-- {hrefId} -->
    </a>
    {/if}
</div>