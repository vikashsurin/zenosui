<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant } from '$lib/style/index.js';
	import type { DivProps } from '$lib/types.js';

	let {
		children,
		uiRounded,
		uiBg,
		uiColor,
		uiText,
		uiVariant,
		border,
		padding,
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
			uiRounded: 'none'
		}
	});

	const finalClass = $derived(
		style({
			uiRounded,
			uiBg,
			uiColor,
			uiText,
			uiVariant,
			border,
			padding,
			class: clsx(_class)
		})
	);
</script>

<div class={finalClass} {...props}>
	{@render children()}
</div>
