<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button } from '$lib/ui/index.js';
	import { getContext } from 'svelte';
	import type { MenuTriggerProps } from '$lib/types/index.js';
	import type { MenuBarContextType, MenuContextType } from './types.js';

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

	const menuBarContext = getContext<MenuBarContextType>('menuBarContext');
	const menuContext = getContext<MenuContextType>('menuContext');

	const menuId = menuContext && menuContext.state.menuId;
	uiRounded = uiRounded ? uiRounded : menuContext?.uiRounded;
	uiSize = uiSize ? uiSize : menuContext?.uiSize;

	function handleClick() {
		if (menuBarContext) {
			menuBarContext.state.openMenuId = menuId;
			menuBarContext.state.isMenuBarActive = true;
		} else {
			menuContext.toggleMenu();
		}
	}
	function onlyOpenWhenMenubarActive() {
		if (!menuBarContext) {
			return;
		}
		if (menuBarContext.state.isMenuBarActive) {
			menuBarContext.state.openMenuId = menuId;
		} else {
			menuBarContext.state.openMenuId = null;
		}
	}
	function handleMouseOver() {
		onlyOpenWhenMenubarActive();
	}
	function handleFocus() {
		onlyOpenWhenMenubarActive();
	}
	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {
			uiRounded: 'none',
			uiSize: 'xs'
		}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<Button
	id={'zu_menu_trigger' + menuId}
	role="menuitem"
	aria-haspopup="true"
	aria-controls={'menu' + menuId}
	aria-expanded={menuContext.state.open}
	data-themed={false}
	class={finalClass}
	{label}
	{iconLeft}
	{iconRight}
	{...props}
	{uiRounded}
	{uiSize}
	onclick={() => handleClick()}
	onmouseover={() => handleMouseOver()}
	onfocus={() => handleFocus()}
>
	{#if children}
		{@render children?.()}
	{/if}
</Button>
