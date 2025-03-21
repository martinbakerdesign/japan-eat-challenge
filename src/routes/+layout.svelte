<script lang="ts">
	import { Nav, Footer } from '$lib/components';
	import '../app.css';
	let { children } = $props();
</script>

<Nav />

<div class="w-full max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto min-h-[75svh]">
	{@render children()}
</div>

<Footer />