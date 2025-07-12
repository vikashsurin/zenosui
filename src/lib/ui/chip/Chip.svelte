<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button } from '$lib/ui/index.js';
	import type { ButtonProps } from '$lib/types.js';
	let {
		sizeVariant,
		label,
		roundedVariant,
		iconLeft,
		iconRight,
		colorVariant,
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
	{sizeVariant}
	{label}
	{iconLeft}
	{iconRight}
	{border}
	{roundedVariant}
	{colorVariant}
	class={finalClass}
	{...props}
/>
