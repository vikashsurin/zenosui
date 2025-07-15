<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button } from '$lib/ui/index.js';
	import { getContext } from 'svelte';
	import type { ButtonProps } from '$lib/types.js';
	import type { RoundedVariant, SizeVariant } from '$lib/style/index.js';

	let {
		children,
		uiRounded,
		uiSize,
		label,
		iconLeft,
		iconRight,
		class: _class,
		...props
	}: ButtonProps = $props();
	const ddmenucontext = getContext<{
		open: boolean;
		uiSize: SizeVariant;
		uiRounded: RoundedVariant;
	}>('dropdown');

	uiRounded = uiRounded ? uiRounded : ddmenucontext.uiRounded;
	uiSize = uiSize ? uiSize : ddmenucontext.uiSize;

	function toggleMenu() {
		ddmenucontext.open = !ddmenucontext.open;
	}
	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {
			uiRounded: 'sm',
			uiSize: 'xs'
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
	{uiRounded}
	{uiSize}
	onclick={toggleMenu}
>
	{#if children}
		{@render children?.()}
	{/if}
</Button>
