<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button } from '$lib/ui/index.js';
	import { getContext } from 'svelte';
	import type { ButtonProps } from '$lib/types.js';
	import type { RoundedVariant, SizeVariant } from '$lib/style/variant.js';

	let {
		children,
		roundedVariant,
		sizeVariant,
		label,
		iconLeft,
		iconRight,
		class: _class,
		...props
	}: ButtonProps = $props();
	const ddmenucontext = getContext<{ open: boolean; sizeVariant: SizeVariant; roundedVariant: RoundedVariant }>(
		'dropdown'
	);

	roundedVariant = roundedVariant ? roundedVariant : ddmenucontext.roundedVariant;
	sizeVariant = sizeVariant ? sizeVariant : ddmenucontext.sizeVariant;

	function toggleMenu() {
		ddmenucontext.open = !ddmenucontext.open;
	}
	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {
			roundedVariant: 'sm',
			sizeVariant: 'xs'
		}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<Button
	class={finalClass}
	{label}
	{iconLeft}
	{iconRight}
	{...props}
	{roundedVariant}
	{sizeVariant}
	onclick={toggleMenu}
>
	{#if children}
		{@render children?.()}
	{/if}
</Button>
