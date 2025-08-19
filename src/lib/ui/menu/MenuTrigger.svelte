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
		...props
	}: MenuTriggerProps = $props();

	const menuBarContext = getContext<MenuBarContextType>('menuBarContext');
	const menuContext = getContext<MenuContextType>('menuContext');

	const menuId = menuContext && menuContext.state.menuId;
	uiRounded = uiRounded ? uiRounded : menuContext?.uiRounded;
	uiSize = uiSize ? uiSize : menuContext?.uiSize;

	let trigger: HTMLElement;
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
			focusFirstMenuItem();
		} else {
			menuBarContext.state.openMenuId = null;
		}
	}

	async function focusFirstMenuItem() {
		await tick();
		if (!trigger.parentElement) return;
		const items: NodeListOf<HTMLElement> = trigger.parentElement.querySelectorAll(
			'[role="menu"] > li > [role="menuitem"]'
		);

		const arr: HTMLElement[] = Array.from(items);
		arr[0].focus();
		// console.log(arr[0]);
		console.log(items);
	}
	function handleClick(e: MouseEvent) {
		openMenu();
	}
	function handleMouseOver() {
		onlyOpenWhenMenubarActive();
	}
	async function handleFocus() {
		// console.log(trigger.parentElement);
		await onlyOpenWhenMenubarActive();
	}
	function handleKeyDown(e: KeyboardEvent) {
		console.log('hello');
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
	bind:ref={trigger}
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
	onclick={(e: MouseEvent) => handleClick(e)}
	onmouseover={() => handleMouseOver()}
	onfocus={() => handleFocus()}
	onkeydown={(e: KeyboardEvent) => handleKeyDown(e)}
>
	{#if children}
		{@render children?.()}
	{/if}
</Button>
