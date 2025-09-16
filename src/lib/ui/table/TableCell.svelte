<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { HTMLTdAttributes } from 'svelte/elements';
	let { children, class: _class, ...props }: HTMLTdAttributes = $props();

	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<td class={finalClass} {...props}>
	{@render children?.()}
</td>

<style>
	td {
		font-size: inherit;
		text-align: left;
		padding: 0.5em 0.75em;
	}
</style>
