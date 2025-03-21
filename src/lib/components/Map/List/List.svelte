<script>
	import { restaurantToEpisodeMap } from "$data";
	import { doesRestaurantHaveEpisode } from "$utils";
	import { ListItem } from ".";

    export let restaurants;

    let sorted;

    $: sorted = restaurants
        .sort((a, b) => {
            const aHasEpisode = doesRestaurantHaveEpisode(a);
            const bHasEpisode = doesRestaurantHaveEpisode(b);
            return (aHasEpisode && bHasEpisode)
                ? (restaurantToEpisodeMap.get(a.id).id - restaurantToEpisodeMap.get(b.id).id)
                : aHasEpisode ? -1 : 1;
        })
</script>

<ul class="">
    {#each sorted as restaurant (restaurant.id)}
        <ListItem {restaurant} />
    {/each}
</ul>