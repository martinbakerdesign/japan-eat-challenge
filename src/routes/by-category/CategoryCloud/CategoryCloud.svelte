<script lang="ts">
	import { categories } from '$data';
	import { selectedCategories, toggle } from '$routes/by-category';
    import { getIsCurrent, Tag } from '.'
</script>

<ul class="flex w-full flex-wrap gap-3 justify-center">
	{#each categories as category}
        <Tag
            {...{
                category,
                onclick: toggle,
                isCurrent: getIsCurrent(category, selectedCategories)
            }}
        />
	{/each}
</ul>
