<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import { routeToPage } from '$utils';

	let { episodes, value }: { episodes: Episode[], value: EpisodeID } = $props();

    function handleSelectedChange(value: EpisodeID) {
        routeToPage(`/episodes/${value.value}`);
    }
</script>

<Select.Root selected={{value}} onSelectedChange={handleSelectedChange}>
	<Select.Trigger class="w-full text-center flex items-center justify-center gap-x-2 border-0 bg-stone-800/65 backdrop-blur-2xl">
        <span class="ml-4 font-medium">Episode {value}</span>
	</Select.Trigger>
	<Select.Content side="top" class="rounded-lg bg-stone-800/65 shadow-2xl backdrop-blur-2xl border-0 max-h-[50svh] overflow-y-auto">
        {#each episodes as episode}
		<Select.Item value={episode.id} class="w-full text-center flex justify-center pr-8 py-2">Episode {episode.id}</Select.Item>
        {/each}
	</Select.Content>
</Select.Root>
