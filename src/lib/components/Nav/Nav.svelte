<script lang="ts">
	import { PlazaSectionNames } from '$constants';
	import { Icon } from '$lib/components';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Item, TouchToggle, isTouch, isTouchMenuOpen } from './index.svelte';
</script>

<nav class="sticky top-4 md:top-8 z-20 mb-2 md:mb-8 w-full flex md:justify-center">
	<div
		class="flex flex-wrap justify-between md:justify-start w-full md:w-[unset] 3xl:grid 3xl:grid-cols-[auto_1fr] items-center gap-x-0 md:gap-x-16 gap-y-4 rounded-2xl bg-stone-200/5 p-2 backdrop-blur-2xl"
	>
		<a href="/" class="text-sm font-bold text-white hover:text-amber-500 flex items-center gap-x-2"
			><img src="/assets/japan-eat.png" alt="Japan Eat" class="w-10 mb-1"/> Japan Eat{#if isTouch.current}<br/>{/if} Kobe Plaza Challenge</a
		>

		<TouchToggle />
		
		<ul id="nav-menu" class="flex flex-col fixed top-18 left-0 right-0 p-2 rounded-xl bg-stone-200/50 backdrop-blur-2xl md:backdrop-blur-none md:bg-transparent md:rounded-none md:p-0 md:static md:flex-row md:items-center md:justify-center gap-1 {isTouch.current ? '' : ''}" hidden={isTouch.current && !isTouchMenuOpen.current} aria-hidden={isTouch.current && !isTouchMenuOpen.current} >
			<Item href="/tier-list">Tier List</Item>
			<Item href="/by-category">by Category/Cuisine</Item>
			<li>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger class="w-full md:w-unset">
						<Item canClick={true}>Plaza Map <Icon icon="chevron-down--24" class="inline-block w-4 fill-inherit" /></Item>
					</DropdownMenu.Trigger>

					<DropdownMenu.Content
						class="bg-stone-200/5 p-2 text-center shadow-xl backdrop-blur-2xl border-0 gap-y-1 flex flex-col"
						static={isTouch.current}
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
	</div>
</nav>
