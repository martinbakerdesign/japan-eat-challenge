<script lang="ts">
    import { Map, List, Card, Zoom } from '$lib/components';
	import { cardState } from '$lib/components/Map';
	import { onMount } from 'svelte';
	import AdjacentSectionButton from './AdjacentSectionButton.svelte';
	import { PlazaSections, PlazaSectionNames } from '$constants';
	import type { PlazaPageData } from './+page';

    let { data }: { data: PlazaPageData } = $props();

    let sectionName = $derived(PlazaSectionNames[data.section]);

    let isFirstSection = $derived(PlazaSections[0] === data?.section);
    let isLastSection = $derived(PlazaSections[2] === data?.section);

    let prevHref = $derived(!isFirstSection ? `/plaza-map/${data.section === 'center-plaza' ? 'center-plaza-west' : 'center-plaza'}` : null);
    let prevLabel = $derived(!isFirstSection ? data.section === 'center-plaza' ? 'Center Plaza West' : 'Center Plaza' : null);
    let nextHref = $derived(!isLastSection ? `/plaza-map/${data.section === 'center-plaza' ? 'san-plaza' : 'center-plaza'}` : null);
    let nextLabel = $derived(!isLastSection ? data.section === 'center-plaza' ? 'San Plaza' : 'Center Plaza' : null);

    const containerVariants = "w-full md:w-32 flex row-start-2 md:row-start-1";

    onMount(() => {
        return () => {
            cardState.show = false;
            cardState.pos = [0,0];
        }
    })
</script>

<div class="gap-2 grid grid-cols-2 md:grid-cols-[auto_1fr_auto] mb-2">

    <div class={containerVariants}>
        <AdjacentSectionButton href={prevHref} dir='left'>
            {prevLabel}
        </AdjacentSectionButton>
    </div>

    <div class="h-[65vh] grid items-center w-full row-start-1 col-start-1 md:col-start-2 col-end-3 relative">
        
        <h2 class="text-xs uppercase font-semibold text-center mb-2 rounded-lg absolute top-2 left-2 right-2 tracking-wider opacity-65 select-none pointer-events-none z-10">
            {sectionName}
        </h2>

        <div class="w-full h-full rounded-lg bg-stone-600/15 p-4 md:p-8 lg:p-14 zoom-window">
            <Map clickable={true} highlight={data.highlight} plazaSection={data.section} />
            <Zoom />
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