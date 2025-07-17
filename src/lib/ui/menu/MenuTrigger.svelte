<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button } from '$lib/ui/index.js';
	import { getContext } from 'svelte';
	import type { MenuTriggerProps } from '$lib/types.js';
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
	}: MenuTriggerProps = $props();

	const menuContext = getContext<{
		uiSize: SizeVariant;
		uiRounded: RoundedVariant;
		toggleMenu: () => void;
	}>('dropdown');

	uiRounded = uiRounded ? uiRounded : menuContext.uiRounded;
	uiSize = uiSize ? uiSize : menuContext.uiSize;

	function toggleMenu() {
		menuContext.toggleMenu();
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
	onclick={() => toggleMenu()}
	onmouseenter={() => toggleMenu()}
>
	{#if children}
		{@render children?.()}
	{/if}
</Button>
