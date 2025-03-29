<script lang="ts">
	import { cn } from '$utils';

	let { href = null, children, target = '', class: className = '', canClick = false } = $props();

	const baseClassname = 'rounded-md flex items-center gap-x-2 fill-current bg-stone-800/30 px-5 py-3 text-sm font-medium transition-colors duration-100 justify-center';
	const hoverClassname = 'hover:bg-amber-500 cursor-pointer';
</script>

{#if href}
<li>
	<a {href} {target} class={cn(baseClassname, hoverClassname, className)}>
		{@render children()}
	</a>
</li>
{:else}
<span class={cn(baseClassname, canClick ? hoverClassname : '', className)}>
	{@render children()}
</span>
{/if}
