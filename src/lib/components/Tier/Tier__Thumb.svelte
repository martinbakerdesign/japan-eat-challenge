<script lang="ts">
    import { episodes, restaurants } from '$data';
	import { InlineLink } from '..';
    export let id: Number;

    $: title = `Episode ${id}`;
    $: href = `/episodes/${id}`;
    $: thumbSrc = `/assets/thumbnails/episode-${id}.webp`;
    $: episode = episodes.find((episode) => episode.id === id);
    $: restaurant = restaurants.find((restaurant) => restaurant.id === episode?.restaurant);
    $: englishName = restaurant?.name.includes('(') ? restaurant?.name.split('(')[0].trim() : restaurant?.name;
    $: japaneseName = restaurant?.name.includes('(') ? restaurant?.name.split('(')[1].slice(0,-1) : null;
</script>

<li class="relative w-full hover:scale-110 transition-all duration-200 ease-in-out flex flex-col overflow-hidden rounded-lg bg-stone-700 p-1">
    <InlineLink {href}>{title}</InlineLink>
    <img src={thumbSrc} alt={title} class="w-full aspect-[4/3] rounded-md"/>
    <span class="block p-1 truncate text-center">
        <span class="text-sm font-medium">{englishName}</span>
        {#if japaneseName}<span class="text-xs opacity-50 block truncate">{japaneseName}</span>{/if}
    </span>
</li>