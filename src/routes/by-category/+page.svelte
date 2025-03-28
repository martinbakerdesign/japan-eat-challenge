<script lang="ts">
	import { getFilteredRestaurants, selectedCategories, CategoryCloud } from ".";
	import List from "$lib/components/List";

    let restaurants = $derived(getFilteredRestaurants(selectedCategories));

</script>

<section>
	<CategoryCloud />
</section>

<section class="mt-8">
	<List {restaurants}/>
</section>