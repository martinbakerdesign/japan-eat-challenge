<script lang="ts">
	import type { Restaurant } from "$types/Restaurant";
	import { ListItem, sortRestaurants } from ".";

    let {restaurants}: {restaurants: Restaurant[]|null|undefined} = $props();

    let sorted = $derived(sortRestaurants(restaurants));
</script>

<ul>
    {#each sorted as restaurant (restaurant.id)}
        <ListItem {restaurant} />
    {/each}
</ul>