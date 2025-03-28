<script lang="ts">
	import { cn } from "$utils";

    let { category, onclick, isCurrent } = $props();

    const variants = {
		current: {
			true: 'bg-amber-500 text-amber-100',
			false: 'bg-amber-800 text-amber-600'
		}
	};

    let className = $derived(cn(
        'font-md cursor-pointer rounded-sm px-3 py-2 text-sm',
        variants.current[isCurrent.toString() as 'true'|'false']
    ));
</script>

<li>
    <button {onclick} data-category={category} class={className}>{category}</button>
</li>