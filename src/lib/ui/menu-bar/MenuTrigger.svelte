<script lang="ts">
	import { getContext } from 'svelte';
	import Menu from './Menu.svelte';

	let { children } = $props();

	let el = $state<HTMLElement>(null);

	const menuContext = getContext('menuContext');
	const id = menuContext.menuId;
	const menuBarContext = getContext('menuBarContext');

	function toggleMenu() {
		menuContext.state.triggerElement = el;
		if (menuBarContext.menuBarState.activeMenuId === id) {
			menuBarContext.menuBarState.closeMenuId(id);
		} else {
			menuBarContext.menuBarState.openMenuId(id);
		}
	}
	function handleClick(e) {
		toggleMenu();
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
			e.preventDefault();
			console.log('from menu trigger');

			toggleMenu();
		}
	}

	function handleFocus(e: FocusEvent) {
		// if (menuBarContext) {
		// 	menuBarContext.menuBarState.openMenuId(id);
		// }
	}
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
	onkeydown={(e: KeyboardEvent) => handleKeyDown(e)}
	class="focus:ring-2"
>
	{@render children?.()}
</button>
