<script lang="ts">
    let {children} = $props();
</script>

<li class="py-1 px-2 rounded-sm bg-amber-600 text-xs select-none">
    {@render children()}
</li>