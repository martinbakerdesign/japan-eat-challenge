<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { store, zoomConstraints } from '.';

    const buttonClassname = "text-md flex aspect-square items-center justify-center rounded-md bg-stone-200/30 px-4 font-semibold disabled:opacity-20 backdrop-blur-2xl";

    onNavigate(() => {
        store.zoom.current = 1;
    })
</script>

<div class="absolute right-2 bottom-2 z-10 flex-col gap-1 flex md:hidden">
    <button
        class={buttonClassname}
        onclick={store.zoomOut}
        disabled={store.zoom.current === zoomConstraints[0]}>-</button
    >
    <button
        class={buttonClassname}
        onclick={store.zoomIn}
        disabled={store.zoom.current === zoomConstraints[1]}>+</button
    >
</div>
