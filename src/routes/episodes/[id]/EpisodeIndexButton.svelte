<script lang="ts">
	interface Props {
		isCurrent: boolean;
		id: number;
	}
	let { isCurrent, id }: Props = $props();

	let show = $state(false);

	function toggle(e) {
		show = e.type === 'mouseenter';
	}
</script>

<li class="relative block aspect-square w-1 md:w-2 rounded-md">
	<a
		href={`/episodes/${id}`}
		class="absolute inset-0 h-full w-full bg-white {isCurrent
			? 'pointer-events-none'
			: 'opacity-35 hover:opacity-75'} dot rounded-4xl"
		onmouseenter={toggle}
		onmouseleave={toggle}
	>
		<div
			class="bg-tier-bg absolute bottom-1/2 mb-4 -translate-x-1/2 rounded-md p-3 font-medium select-none shadow-xl"
			hidden={!show}
			aria-hidden={!show}
		>
			{id}
		</div>
	</a>
</li>
