<script lang="ts">
	import { Card, cardState } from '$lib/components/Map/index.svelte';
    import List from '$lib/components/List';
	import { onMount } from 'svelte';
	import AdjacentSectionButton from './AdjacentSectionButton.svelte';
	import { PlazaSections, PlazaSectionNames } from '$constants';
	import type { PlazaPageData } from './+page';
    import {components} from './'

    let { data }: { data: PlazaPageData } = $props();

    let Component = $derived(components.get(data.section));
    let sectionName = $derived(PlazaSectionNames[data.section]);

    let isFirstSection = $derived(PlazaSections[0] === data?.section);
    let isLastSection = $derived(PlazaSections[2] === data?.section);

    let prevHref = $derived(!isFirstSection ? `/plaza-map/${data.section === 'center-plaza' ? 'center-plaza-west' : 'center-plaza'}` : null);
    let prevLabel = $derived(!isFirstSection ? data.section === 'center-plaza' ? 'Center Plaza West' : 'Center Plaza' : null);
    let nextHref = $derived(!isLastSection ? `/plaza-map/${data.section === 'center-plaza' ? 'san-plaza' : 'center-plaza'}` : null);
    let nextLabel = $derived(!isLastSection ? data.section === 'center-plaza' ? 'San Plaza' : 'Center Plaza' : null);


    const containerVariants = "w-full flex";

    $inspect(data.highlight)

    onMount(() => {
        return () => {
            cardState.show = false;
            cardState.pos = [0,0];
        }
    })
</script>

<div class="gap-x-2 grid grid-cols-[auto_1fr_auto] mb-2">

    <div class={containerVariants}>
        <AdjacentSectionButton href={prevHref} dir='left'>
            {prevLabel}
        </AdjacentSectionButton>
    </div>

    <div class="h-[65vh] grid items-center grid-rows-[auto_1fr] w-full">

        
        <h2 class="text-xl font-semibold text-center mb-2 rounded-lg w-full bg-stone-600/15 p-4">
            {sectionName}
        </h2>

        <div class="w-full h-full overflow-hidden rounded-lg bg-stone-600/15 p-14">
            {#if Component}
            <Component clickable={true} highlight={data.highlight} />
            {/if}
        </div>
        <Card />
    </div>

    <div class={containerVariants}>
        <AdjacentSectionButton href={nextHref} dir='right'>
            {nextLabel}
        </AdjacentSectionButton>
    </div>

</div>

<!-- list -->
<List restaurants={data.restaurants} />