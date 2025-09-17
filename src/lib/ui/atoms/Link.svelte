<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '$lib/style/index.js';
	import clsx from 'clsx';
	import type { LinkProps } from '$lib/types/index.js';

	let { children, class: _class, href, themed = true, ...props }: LinkProps = $props();

	const style = tv({
		extend: baseVariant,
		base: 'inline-flex justify-center items-center ',
		variants: {},
		compoundVariants: [],
		defaultVariants: {}
	});

	const finalClasses = $derived(
		style({
			class: clsx(_class)
		})
	);
</script>

<a class={finalClasses} data-themed={themed} class:link={themed} {href} {...props}>
	{@render children()}
</a>
