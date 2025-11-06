<script lang="ts">
	import { getContext } from 'svelte';

	import { type MenuBarContextType, type MenuContextType } from './types.ts';
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '$lib/style/base.js';
	import clsx from 'clsx';
	import { TEXT_SIZE } from '$lib/style/sizing.js';
	import { activeMenuTrigger, menuTriggerTheme } from './theme.js';

	let { children, uiRounded, uiSize, class: _class } = $props();

	let el = $state<HTMLElement>(null);

	const menuContext = getContext<MenuContextType>('menuContext');
	const menuBarContext = getContext<MenuBarContextType>('menuBarContext');
	const id = menuContext.menuId;

	// $inspect('id : ', menuContext.isOpen());

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
	function handleClick(e) {
		toggleMenu();
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			toggleMenu();
		}

		if (e.key === 'ArrowDown') {
			e.preventDefault();
			openMenu();
		}
	}

	function handleFocus(e: FocusEvent) {}

	function handleMouseEnter(e: MouseEvent) {
		const target = e.target as HTMLElement;
		target.focus();

		if (menuBarContext) {
			if (menuBarContext.menuBarState.anyOpen) {
				openMenu();
			}
		}
	}

	function handleMouseLeave(e: MouseEvent) {}

	$inspect({ status: id === menuBarContext.menuBarState.activeMenuId });

	function getActiveStyle() {
		if (menuContext.isOpen()) {
			return activeMenuTrigger;
		}
	}

	const activeStyle = $derived(menuContext.isOpen() ? activeMenuTrigger : '');

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
	aria-expanded={menuContext.isOpen()}
	aria-controls="menu-{id}"
	onclick={(e) => handleClick(e)}
	tabindex="0"
	onfocus={(e) => handleFocus(e)}
	onmouseenter={(e) => handleMouseEnter(e)}
	onmouseleave={(e) => handleMouseLeave(e)}
	onkeydown={(e: KeyboardEvent) => handleKeyDown(e)}
	class={finalClass}
>
	{@render children?.()}
</button>
