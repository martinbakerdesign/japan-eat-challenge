<script lang="ts">
	import { cn } from '$utils';
	import { extractIconSize, icons } from '.';

	let iconId: keyof typeof icons;
	let className: string | null | undefined;

	export { iconId as icon, className as class };

	const hasId = iconId != null && iconId.length > 0;
	const iconSize = extractIconSize(hasId, iconId);
	const paths = hasId ? (icons[iconId] ?? null) : null;
	const pathsFound = paths != null;
</script>

{#if pathsFound}
	<svg
		class={cn("inline-block aspect-square fill-inherit", className)}
		viewBox="0 0 {iconSize} {iconSize}"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		{#each paths as d (d)}
			<path {d} />
		{/each}
	</svg>
{/if}
