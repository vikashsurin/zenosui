<script lang="ts">
	import { getContext } from 'svelte';
	import Menu from './Menu.svelte';
	import { type MenuBarContextType, type MenuContextType } from './types.ts';

	let { children } = $props();

	let el = $state<HTMLElement>(null);

	const menuContext = getContext<MenuContextType>('menuContext');
	const menuBarContext = getContext<MenuBarContextType>('menuBarContext');
	const id = menuContext.menuId;

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
			console.log('arrow down');
			openMenu();
			menuBarContext.menuBarState.setFirstMenuItemFocus();
		}
	}

	function handleFocus(e: FocusEvent) {
		// if (menuBarContext) {
		// 	menuBarContext.menuBarState.openMenuId(id);
		// }
	}

	function handleMouseEnter(e: MouseEvent) {
		if (menuBarContext) {
			if (menuBarContext.menuBarState.anyOpen) {
				openMenu();
			}
		}
	}

	function handleMouseLeave(e: MouseEvent) {}
</script>

<button
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
	class="focus:ring-2"
>
	{@render children?.()}
</button>
