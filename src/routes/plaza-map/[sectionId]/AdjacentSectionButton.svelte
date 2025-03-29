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
    const baseClassnames = 'flex flex-col w-full justify-center items-center text-center gap-y-2 fill-current rounded-lg h-full bg-amber-300/5 text-sm p-4';
</script>

{#if href}
<a {href} class="{baseClassnames} hover:text-amber-500">
    <Icon {icon} class="w-6 md:w-10 fill-inherit" />
    <div>{@render children()}</div>
</a>
{:else}
<div class="{baseClassnames} opacity-30">
    <Icon {icon} class="w-6 md:w-10 fill-inherit" />
    <div>{@render children()}</div>
</div>
{/if}