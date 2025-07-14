<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant } from '$lib/style/variant.js';
	import type { DivProps } from '$lib/types.js';

	let {
		children,
		roundedVariant,
		backgroundColor,
		contentColor,
		textSize,
		variant,
		border,
		padding,
		sizeVariant,
		colorVariant,
		class: _class,
		...props
	}: DivProps = $props();

	const style = tv({
		extend: baseVariant,
		base: `block`,
		variants: {
			// Add div-specific variants here if needed
			display: {
				block: 'block',
				inline: 'inline-block',
				flex: 'flex',
				grid: 'grid'
			}
		},
		defaultVariants: {
			roundedVariant: 'none'
		}
	});

	const finalClass = $derived(
		style({
			roundedVariant,
			backgroundColor,
			contentColor,
			textSize,
			variant,
			border,
			padding,
			class: clsx(_class)
		})
	);
</script>

<div class={finalClass} {...props}>
	{@render children()}
</div>
