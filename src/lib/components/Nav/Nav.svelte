<script lang="ts">
	import { PlazaSectionNames, PlazaSections } from '$constants';
	import { Icon } from '$lib/components';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Item } from '.';
</script>

<nav class="sticky top-0 z-10 mb-8 flex w-full justify-center">
	<div
		class="grid grid-cols-[auto_1fr] items-center gap-x-16 rounded-2xl bg-stone-200/5 p-2 backdrop-blur-2xl"
	>
		<a href="/" class="ml-4 text-sm font-bold text-white hover:text-amber-500"
			>Japan Eat Kobe Plaza Challenge</a
		>
		<ul class="flex items-center justify-center gap-x-1">
			<Item href="/tier-list">Tier List</Item>
			<Item href="/by-category">by Category/Cuisine</Item>
			<li>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
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
		</ul>
	</div>
</nav>
