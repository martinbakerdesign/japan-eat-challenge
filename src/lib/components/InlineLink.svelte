<script lang="ts">
    export let href: string|null|undefined;
    let className: string|null|undefined;
    export {className as class}
</script>

<a {href} class="-mb-[1px] -mr-[1px] rounded-md w-[1px] h-[1px] after:absolute after:inset-0 after:rounded-[inherit] {className}"><slot /></a>

<style>
    a {
        font-size: 0;
    }
    a:after {
        content: "";
    }
    a:focus-visible:after {
        outline: 3px solid var(--color-amber-500);
        outline-offset: 5px;
        z-index: 10;
    }
</style>