<script lang="ts">
	import { PlazaSectionNames } from '$constants';
	import { Icon } from '$lib/components';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Item, isTouch, isTouchMenuOpen } from './index.svelte';
</script>

<ul id="nav-menu" class="hidden md:flex md:flex-wrap flex-col absolute top-full mt-2 md:mt-0 left-0 right-0 p-2 rounded-xl bg-stone-600/80 backdrop-blur-2xl z-20 md:backdrop-blur-none md:bg-transparent md:rounded-none md:p-0 md:static md:flex-row md:items-center md:justify-start gap-1 {isTouch.current ? '' : ''}" hidden={isTouch.current && !isTouchMenuOpen.current} aria-hidden={isTouch.current && !isTouchMenuOpen.current} >
    <Item href="/tier-list">Tier List</Item>
    <Item href="/by-category">by Category/Cuisine</Item>
    <li>
        <DropdownMenu.Root>
            <DropdownMenu.Trigger class="w-full md:w-unset">
                <Item canClick={true}>Plaza Map <Icon icon="chevron-down--24" class="inline-block w-4 fill-inherit" /></Item>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content
                class="bg-stone-200/5 p-2 text-center shadow-xl backdrop-blur-2xl border-0 gap-y-1 flex flex-col"
            >
                {#each Object.entries(PlazaSectionNames) as [sectionId, sectionName]}
                    <DropdownMenu.Item href="/plaza-map/{sectionId}" class="w-full p-0">
                        <Item canClick={true} class="text-center justify-center w-full">{sectionName}</Item>
                    </DropdownMenu.Item>
                {/each}
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </li>
    <Item href="https://japaneat.com/" target="_blank">
        Japan Eat <Icon icon="new-window--54" class="w-4 fill-inherit" />
    </Item>
    <Item href="https://ko-fi.com/japaneat" target="_blank">
        Support Japan Eat <Icon icon="new-window--54" class="w-4 fill-inherit" />
    </Item>
</ul>