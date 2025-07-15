<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '$lib/style/index.js';
	import clsx from 'clsx';
	import type { LinkProps } from '$lib/types.js';

	let {
		children,
		class: _class,
		href,
		...props
	}: LinkProps = $props();

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

<a class={finalClasses} {href} {...props}>
	{#if children}
		{@render children()}
	{/if}
</a>