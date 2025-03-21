<script lang="ts">
	import { tierTextClassnames } from '$constants';
	import { Tiers } from '$types';
	import { episodes } from '$data';
  import { cardState, onMouseLeave, hoveredRestaurant } from './index.svelte'
  import { computePosition, offset, flip  } from '@floating-ui/dom';
	import { InlineLink } from '$lib/components';

  let floating: HTMLElement;
  let reference: HTMLElement;

  let episode = $state<Episode|null>(null);
  const hasEpisode = $derived(episode != null);
  $effect(() => {
    episode = episodes.find(ep => ep.restaurant === $hoveredRestaurant?.id) ?? null;
  });
  $effect(() => {setPos(cardState.pos)})

  function setPos ([x,y]) {
    if (reference && floating) {
      computePosition(reference, floating, {
        placement: 'top',
        middleware: [
          offset(8),
          flip()
        ],
      }).then(({x, y}) => {
        Object.assign(floating.style, {
          left: `${x}px`,
          top: `${y}px`
        });
      });
    }
  }
</script>

<div 
  class="absolute pointer-events-none select-none" 
  style="left: {cardState.pos[0]}px; top: {cardState.pos[1]}px;"
  bind:this={reference}
>
  <div class="w-1 h-1 rounded-full"></div>
</div>

<div
  bind:this={floating}
  class="rounded-md shadow-lg p-1 grid grid-cols-[auto_1fr] gap-x-4 items-center bg-neutral-700 absolute top-0 left-0 max-w-80 hover:scale-105 hover:transition-scale hover:duration-200"
  id="map__card"
  on:mouseleave={onMouseLeave}
>
  {#if hasEpisode}
    <InlineLink href="/episodes/{episode?.id}">Episode {episode.id}</InlineLink>
    <img src="/assets/thumbnails/episode-{episode?.id}.webp" alt="Episode {episode?.id}" class="w-24 h-24 rounded-sm col-start-1 col-end-2 row-start-1" />
  {/if}
  <div class=" min-w-40 pr-2 col-start-2 row-start-1">
    {#if hasEpisode && ![Tiers.D, Tiers.F].includes(episode?.tier)}
      <div class="{tierTextClassnames[episode?.tier]} font-semibold text-xl">
        {episode?.tier}
      </div>
    {/if}
    <h3 class="font-semibold">{$hoveredRestaurant?.name}</h3>
    {#if $hoveredRestaurant?.cat.length}
    <ul class="mt-2 flex flex-wrap gap-1">
      {#each $hoveredRestaurant?.cat as cat}
      <li class="text-xs rounded-sm py-0.5 px-1 bg-amber-600">{cat}</li>
      {/each}
    </ul>
    {/if}
  </div>
</div>
