<script lang="ts">
	import { Card, List } from '$lib/components/Map/index.svelte';
	import { onMount } from 'svelte';
    import {components} from './'
	import { cardState } from '$lib/components/Map/Card/index.svelte';
	import { PlazaSections } from '$types';
	import AdjacentSectionButton from './AdjacentSectionButton.svelte';
	import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    const Component = $derived(components.get(data.section));
    const titles = {
        'center-plaza-west': 'Center Plaza West',
        'center-plaza': 'Center Plaza',
        'san-plaza': 'San Plaza',
    }
    const title = $derived(titles[data.section]);

    const prevHref = $derived(`/plaza-map/${data.section === 'center-plaza' ? 'center-plaza-west' : 'center-plaza'}`);
    const prevLabel = $derived(data.section === 'center-plaza' ? 'Center Plaza West' : 'Center Plaza');
    const nextHref = $derived(`/plaza-map/${data.section === 'center-plaza' ? 'san-plaza' : 'center-plaza'}`);
    const nextLabel = $derived(data.section === 'center-plaza' ? 'San Plaza' : 'Center Plaza');

    const isFirstSection = $derived(PlazaSections[0] === data?.section);
    const isLastSection = $derived(PlazaSections[2] === data?.section);

    onMount(() => {
        return () => {
            cardState.show = false;
            cardState.pos = [0,0];
        }
    })
</script>

<h2 class="text-2xl font-semibold mt-14 text-center w-full">
    {title}
</h2>

<div class="gap-x-2 grid grid-cols-[12rem_1fr_12rem] items-center">
    <div class="w-full flex justify-center">
        {#if !isFirstSection}
        <AdjacentSectionButton href={prevHref} dir='left'>
            {prevLabel}
        </AdjacentSectionButton>
        {/if}
    </div>

    <div class="py-20 h-[65vh] grid items-center mx-auto ">
        <Component />
        <Card />
    </div>

    <div class="w-full flex justify-center">
        {#if !isLastSection}
            <AdjacentSectionButton href={nextHref} dir='right'>
                {nextLabel}
            </AdjacentSectionButton>
        {/if}
    </div>
</div>

<!-- list -->
<List restaurants={data.restaurants} />