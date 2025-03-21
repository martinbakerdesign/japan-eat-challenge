<script>
    import {categories} from '$data';
    import { selectedCategories, toggle } from '$state/categories'
</script>

<ul class="flex gap-3 flex-wrap w-full">

    {#each categories as category}
        <li>
            <button on:click={toggle} data-category={category} class={`rounded-sm font-md px-3 py-2 cursor-pointer ${selectedCategories.get(category) ? 'bg-amber-500 text-amber-100' : 'bg-amber-800 text-amber-600'}`}>{category}</button>
        </li>
    {/each}
</ul>

