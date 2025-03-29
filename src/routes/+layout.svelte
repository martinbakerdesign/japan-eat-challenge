<script lang="ts">
	import { Nav, Footer } from '$lib/components';
	import '../app.css';
	let { children } = $props();
</script>


<div class="w-full md:px-5 md:max-w-3xl lg:max-w-5xl 2xl:max-w-7xl mx-auto min-h-[75svh] p-4 md:py-8">
	<Nav />

	{@render children()}

	<Footer />
</div>
