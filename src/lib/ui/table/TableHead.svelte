<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { HTMLThAttributes } from 'svelte/elements';

	let { children, class: _class, ...props }: HTMLThAttributes = $props();

	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<th class={finalClass} {...props}>
	{@render children?.()}
</th>

<style>
	th {
		font-size: inherit;
		text-align: left;
		padding: 0.5em 0.75em;
	}
</style>
