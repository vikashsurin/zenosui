<script lang="ts">
	import { getContext } from 'svelte';

	import { type MenuBarContextType, type MenuContextType } from './types.ts';
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '$lib/style/base.js';
	import clsx from 'clsx';
	import { TEXT_SIZE } from '$lib/style/sizing.js';
	import { activeMenuTrigger, menuTriggerTheme } from './theme.js';
	import type { MenuBarMenuTriggerProps } from '$lib/types/index.ts';

	let { children, uiRounded, uiSize, class: _class }: MenuBarMenuTriggerProps = $props();

	let el = $state<HTMLElement | null>(null);

	const menuContext = getContext<MenuContextType>('menuContext');
	const menuBarContext = getContext<MenuBarContextType>('menuBarContext');
	const id = menuContext.menuId;

	const isOpen = $derived(menuContext.isOpen());
	const activeStyle = $derived(isOpen ? activeMenuTrigger : '');

	function toggleMenu() {
		if (menuBarContext.menuBarState.activeMenuId === id) {
			menuBarContext.menuBarState.closeMenuId(id);
		} else {
			menuBarContext.menuBarState.openMenuId(id);
		}
	}

	function openMenu() {
		menuBarContext.menuBarState.openMenuId(id);
	}

	function handleClick() {
		toggleMenu();
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			toggleMenu();
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			openMenu();
		}
	}

	function handleMouseEnter(e: MouseEvent) {
		const target = e.target as HTMLElement;
		target.focus();

		if (menuBarContext?.menuBarState.hasOpenMenu) {
			openMenu();
		}
	}

	const style = tv({
		extend: baseVariant,
		base: `${menuTriggerTheme} `,
		variants: {
			uiSize: TEXT_SIZE
		}
	});

	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class, `${activeStyle}`) }));
</script>

<button
	data-menu-trigger
	bind:this={el}
	data-menu-id={id}
	role="menuitem"
	aria-haspopup="true"
	aria-expanded={isOpen}
	aria-controls={'menu-' + id}
	onclick={handleClick}
	tabindex="0"
	onmouseenter={handleMouseEnter}
	onkeydown={handleKeyDown}
	class={finalClass}
>
	{@render children?.()}
</button>
