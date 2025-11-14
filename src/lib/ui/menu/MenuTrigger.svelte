<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button } from '$lib/ui/index.js';
	import { getContext, tick } from 'svelte';
	import type { MenuTriggerProps } from '$lib/types/index.js';
	import type { MenuBarContextType, MenuContextType } from './types.js';
	import type { UUID } from 'crypto';

	let {
		children,
		uiRounded,
		uiSize,
		label,
		iconLeft,
		iconRight,
		class: _class,
		activeClass = 'bg-green-500',
		...props
	}: MenuTriggerProps = $props();

	const menuBarContext = getContext<MenuBarContextType>('menuBarContext');
	const menuContext = getContext<MenuContextType>('menuContext');

	const menuId = menuContext && menuContext.state.menuId;
	uiRounded = uiRounded ? uiRounded : menuContext?.uiRounded;
	uiSize = uiSize ? uiSize : menuContext?.uiSize;

	let isActive = $derived(menuBarContext && menuBarContext.state.openMenuId === menuId);

	function openMenu() {
		if (menuBarContext) {
			menuBarContext.state.openMenuId = menuId;
			menuBarContext.state.isMenuBarActive = true;
		} else {
			menuContext.toggleMenu();
		}
	}

	async function onlyOpenWhenMenubarActive() {
		if (!menuBarContext) {
			return;
		}

		if (menuBarContext.state.isMenuBarActive) {
			menuBarContext.state.openMenuId = menuId;
			// shouldFocusFirstItem();
		} else {
			menuBarContext.state.openMenuId = null;
		}
	}

	function handleClick(e: MouseEvent) {
		openMenu();
	}
	function handleMouseOver() {
		onlyOpenWhenMenubarActive();
	}
	async function handleFocus() {
		await onlyOpenWhenMenubarActive();
	}

	let trigger: HTMLElement;
	let menuItems: NodeListOf<HTMLElement> | undefined;
	async function openMenuAndFocusFirst() {
		openMenu();
		await tick();
		const menu = trigger.closest('[role="menu"]');
		menuItems = menu?.querySelectorAll('[role="menuitem"]');
		if (menuItems) {
			menuItems[0].focus();
		}
	}
	// Cache the menu triggers to avoid repeated DOM queries
	let cachedMenuTriggers: HTMLElement[] | null = null;

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
			e.preventDefault();
			openMenuAndFocusFirst();
			return;
		}

		if (!['ArrowRight', 'ArrowLeft'].includes(e.key) || !menuBarContext) {
			return;
		}

		e.preventDefault();

		// Use cached triggers or query once
		if (!cachedMenuTriggers) {
			// const menubar = trigger.parentElement?.parentElement;
			const menubar = trigger.closest('[role="menubar"]');
			const menuTriggers = menubar?.querySelectorAll<HTMLElement>('li > [role="menuitem"]');
			cachedMenuTriggers = menuTriggers ? Array.from(menuTriggers) : [];
		}

		if (!cachedMenuTriggers.length) return;

		const currentIndex = cachedMenuTriggers.findIndex((item) => item === trigger);
		if (currentIndex === -1) return;

		const targetIndex =
			e.key === 'ArrowRight'
				? (currentIndex + 1) % cachedMenuTriggers.length
				: (currentIndex - 1 + cachedMenuTriggers.length) % cachedMenuTriggers.length;

		cachedMenuTriggers[targetIndex]?.focus();
	}
	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {
			uiRounded: 'none',
			uiSize: 'xs'
		}
	});
	const finalClass = $derived(style({ class: clsx(_class, isActive ? 'button-active' : '') }));
</script>

<Button
	bind:ref={trigger}
	data-menu-trigger
	id={'zu_menu_trigger' + menuId}
	role="menuitem"
	aria-haspopup="true"
	aria-controls={'menu' + menuId}
	aria-expanded={menuContext.state.open}
	active={isActive}
	data-themed={false}
	class={finalClass}
	{activeClass}
	{label}
	{iconLeft}
	{iconRight}
	{uiRounded}
	{uiSize}
	onclick={(e: MouseEvent) => handleClick(e)}
	onmouseover={() => handleMouseOver()}
	onfocus={() => handleFocus()}
	onkeydown={(e: KeyboardEvent) => handleKeyDown(e)}
	{...props}
>
	{@render children?.()}
</Button>
