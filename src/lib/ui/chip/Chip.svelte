<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button } from '$lib/ui/index.js';
	import type { ButtonProps } from '$lib/types.js';
	let {
		uiSize,
		label,
		uiRounded,
		iconLeft,
		iconRight,
		uiColorPreset,
		border,
		class: _class,
		...props
	}: ButtonProps = $props();

	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<Button
	{uiSize}
	{label}
	{iconLeft}
	{iconRight}
	{border}
	{uiRounded}
	{uiColorPreset}
	class={finalClass}
	{...props}
/>
