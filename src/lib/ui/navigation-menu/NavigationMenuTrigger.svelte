<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '$lib/style/index.js';
	import clsx from 'clsx';
	import { getContext } from 'svelte';
	import { Button } from '$lib/ui/index.js';
	import type { NavigationMenuTriggerProps } from '$lib/types/index.js';

	let {
		uiSize,
		uiRounded,
		label,
		iconLeft,
		iconRight,
		children,
		class: _class,
		...props
	}: NavigationMenuTriggerProps = $props();

	const navMenuCtx = getContext<{ menu: { id: string } }>('navMenu');
	const navMenuBarCtx = getContext<{
		activeNavMenu: { id: string };
		setActiveNavMenu: (id: string | null) => void;
		clearCloseTimeout: () => void;
		scheduleClose: () => void;
	}>('navMenuBar');

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

	function handleClick() {
		navMenuBarCtx.clearCloseTimeout();
		const id = navMenuCtx.menu.id;
		const activeId = navMenuBarCtx.activeNavMenu.id;
		if (id === activeId) {
			navMenuBarCtx.setActiveNavMenu(null);
		} else {
			navMenuBarCtx.setActiveNavMenu(id);
		}
	}

	function handleMouseEnter() {
		navMenuBarCtx.clearCloseTimeout();

		const id = navMenuCtx.menu.id;
		const activeId = navMenuBarCtx.activeNavMenu.id;

		navMenuBarCtx.setActiveNavMenu(id);
	}

	function handleMouseLeave() {
		navMenuBarCtx.scheduleClose();
	}
</script>

<Button
	class={finalClasses}
	{label}
	{iconLeft}
	{iconRight}
	{uiRounded}
	{uiSize}
	onclick={handleClick}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	{...props}
>
	{@render children()}
</Button>
