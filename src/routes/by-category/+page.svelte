<script lang="ts">
	import {CategoryCloud} from "$lib/components";
	import { List } from "$lib/components/Map/index.svelte";
	import {restaurants as allRestaurants} from "$data";
	import { selectedCategories } from "$state/categories";

    const restaurants = $derived(allRestaurants.filter(r => r.cat.some(c => selectedCategories.get(c))));

</script>

<section class="py-14">
	<CategoryCloud />
</section>

<List {restaurants}/>