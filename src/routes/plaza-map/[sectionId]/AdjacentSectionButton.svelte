<script lang="ts">
	import { Icon } from "$lib/components";

    interface Props {
        href: string|undefined|null,
        dir: 'left' | 'right',
        children: () => string
    }

    let {
        href,
        dir,
        children
    } : Props = $props();

    const icon = $derived(dir === 'left' ? 'circle-chevron-left--24' : 'circle-chevron-right--24');
</script>

{#if href}
<a {href} class="flex flex-col w-full items-center gap-y-2 fill-current hover:text-amber-500">
    <Icon {icon} class="w-10 fill-inherit" />
    <div>{@render children()}</div>
</a>
{:else}
<div class="flex flex-col w-full items-center gap-y-2 fill-current opacity-30">
    <Icon {icon} class="w-10 fill-inherit" />
    <div>{@render children()}</div>
</div>
{/if}