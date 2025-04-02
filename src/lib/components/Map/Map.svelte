<script lang="ts">
	import { PlazaSections } from '$constants';
	import { isTouch } from '../Nav/index.svelte';
	import { mapDefinitions, restaurantPolyClassname, store } from '.';
	import MapShape from './Map__Shape.svelte';
	import { cn, doesRestaurantHaveEpisode } from '$utils';

	let {
		highlight = null,
		clickable = false,
		plazaSection = null
	}: {
		clickable: boolean;
		highlight: number | null;
		plazaSection: PlazaSection | null | undefined;
	} = $props();

	let validPlazaSection = $derived(plazaSection != null && PlazaSections.includes(plazaSection));
	let mapDefinition = $derived(plazaSection != null ? mapDefinitions[plazaSection] : null);

	let el: null | SVGElement = $state(null);

	$effect(() => {
		if (!validPlazaSection) return store.destroy();

		store.init(el, plazaSection, highlight, clickable, isTouch.current);

		return () => {store.destroy()};
	});

	function getOtherFillStyle (clickable: boolean) {
		return clickable
			? `fill:rgb(${mapDefinition.otherFill});`
			: null
	}
	function getRestaurantFillStyle (clickable: boolean, isHighlighted: boolean) {
		return isHighlighted
				? `fill:rgb(255,255,255);`
					: !clickable
						? null
						: `fill:rgb(${mapDefinition.restaurantFill});`
	}
</script>

{#if mapDefinition != null}
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 {mapDefinition.viewBox[2]} {mapDefinition.viewBox[3]}"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		xml:space="preserve"
		style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;touch-action:none;"
		class="w-full"
	>
		<path id="walls-stairs" d={mapDefinition.wallsStairs} style="fill:rgb(65,66,80);" />
		<g id="shops">
			<g id="other" class="opacity-40" style="fill-rule:nonzero;">
				{#each Object.entries(mapDefinition.shops.other) as [id, shop]}
					<MapShape
						{...{
							id,
							class: 'other',
							style: getOtherFillStyle(clickable),
							...shop
						}}
					/>
				{/each}
			</g>
			<g id="restaurants" bind:this={el} style="fill-rule:nonzero;">
				{#each Object.entries(mapDefinition.shops.restaurants) as [id, restaurant]}
				{@const isHighlighted = highlight != null && highlight?.toString() === id}
				{@const hasEpisode = doesRestaurantHaveEpisode(`${plazaSection}__${id}`)}
					<MapShape
						{...{
							id,
							class: cn(restaurantPolyClassname, 
								!clickable
								? (isHighlighted ? '' : 'opacity-40')
								: (!hasEpisode ? 'opacity-50 cursor-default' : '')
							),
							style: getRestaurantFillStyle(clickable, isHighlighted),
							...restaurant
						}}
					/>
				{/each}
			</g>
		</g>
		<g id="symbols">
			{#each mapDefinition.symbols as symbol}
				<MapShape {...{ d: symbol.d, style: `fill:rgb(${symbol.fill});` }} />
			{/each}
		</g>
	</svg>
{/if}
