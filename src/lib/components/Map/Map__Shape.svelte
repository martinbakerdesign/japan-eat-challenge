<script lang="ts">

    let { 
        type = 'path',
        id = -1,
        d = null,
        x= null,
        y= null,
        width= null,
        height= null,
        ...restProps
    }: {
        type: 'path' | 'rect',
        id?: number,
        d?: string|null|undefined,
        x?: number|null|undefined,
        y?: number|null|undefined,
        width?: number|null|undefined,
        height?: number|null|undefined,
    } = $props();
</script>

{#if type === 'path' && d != null}
    <path {id} {d} {...restProps} />
{:else if type === 'rect' && x != null && y != null && width != null && height != null}
    <rect {id} {x} {y} {width} {height}  {...restProps} />
{/if}