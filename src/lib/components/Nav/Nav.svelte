<script lang="ts">
	import { Menu, TouchToggle } from './index.svelte';
</script>

<nav class="sticky top-4 md:top-8 z-20 mb-2 md:mb-8 w-full flex md:justify-center">
	<div
		class="flex flex-wrap justify-between md:justify-start w-full md:w-[unset] 2xl:grid 2xl:grid-cols-[auto_1fr] items-center gap-x-0 md:gap-x-16 gap-y-4 rounded-2xl bg-stone-200/5 p-2 backdrop-blur-2xl relative"
	>
		<a href="/" class="text-sm font-bold text-white hover:text-amber-500 flex items-center gap-x-2"
			><img src="/assets/japan-eat.png" alt="Japan Eat" class="w-10 mb-1"/> Japan Eat<br class="inline md:hidden"/> Kobe Plaza Challenge</a
		>

		<TouchToggle />
		
		<Menu />
	</div>
</nav>
