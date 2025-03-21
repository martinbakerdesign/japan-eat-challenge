<script lang="ts">
	import { Icon } from "$lib/components";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";


</script>

<nav class="bg-stone-900 p-4 lg:p-8 flex flex-col sticky top-0 w-full z-10 justify-start items-center gap-y-5">
	<a href="/" class="text-white text-lg font-medium">Japan Eat Kobe Plaza Challenge</a>
    <ul class="flex gap-x-8">
        <li>
            <a href="/tier-list" class=" hover:text-amber-500">Tier List</a>
        </li>
        <li>
            <a href="/by-category" class=" hover:text-amber-500">by Category/cuisine</a>
        </li>
        <li>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger class="fill-current hover:text-amber-500 flex items-center gap-x-2">Plaza Map <Icon icon='chevron-down--24' class='fill-inherit inline-block w-4'/></DropdownMenu.Trigger>

                <DropdownMenu.Content class="w-56 border-0 bg-bg shadow-xl text-center p-3 flex flex-col items-center">
                    <DropdownMenu.Item class="cursor-pointer" href='/plaza-map/center-plaza-west'><span class="hover:text-amber-500">Center Plaza West</span></DropdownMenu.Item>
                    <DropdownMenu.Item class="cursor-pointer" href='/plaza-map/center-plaza'><span class="hover:text-amber-500">Center Plaza</span></DropdownMenu.Item>
                    <DropdownMenu.Item class="cursor-pointer" href='/plaza-map/san-plaza'><span class="hover:text-amber-500">San Plaza</span></DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
        </li>
        <li>
            <a href="https://japaneat.com/" target="_blank" class="flex items-center gap-x-1 fill-current hover:text-amber-500 hover:fill-amber-500">Japan Eat <Icon icon='new-window--54' class='w-4 fill-inherit'/></a>
        </li>
    </ul>
</nav>