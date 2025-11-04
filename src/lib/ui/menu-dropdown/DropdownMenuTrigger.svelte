<script lang="ts">
	import { getContext } from 'svelte';

	import { type DropdownMenuContextType } from './types.ts';

	let { children } = $props();

	let el = $state<HTMLElement | null>(null);

	const dropdownMenuContext = getContext<DropdownMenuContextType>('dropdownMenuContext');

	// const menuBarContext = getContext<MenuBarContextType>('menuBarContext');
	const id = dropdownMenuContext.menuId;

	function toggleMenu() {
		dropdownMenuContext.dropdownMenuState.toggleOpen();
	}
	function openMenu() {
		dropdownMenuContext.dropdownMenuState.open();
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
		// if (dropdownMenuContext) {
		// 	openMenu();
		// }
	}

	function handleMouseLeave(e: MouseEvent) {}
</script>

<button
	data-menu-trigger
	bind:this={el}
	data-menu-id={id}
	role="menuitem"
	aria-haspopup="true"
	aria-expanded={dropdownMenuContext.dropdownMenuState.isOpen}
	aria-controls="menu-{id}"
	onclick={(e) => handleClick(e)}
	tabindex="0"
	onfocus={(e) => handleFocus(e)}
	onmouseleave={(e) => handleMouseLeave(e)}
	onkeydown={(e: KeyboardEvent) => handleKeyDown(e)}
	class="focus:ring-2"
	onmouseenter={(e) => handleMouseEnter(e)}
>
	{@render children?.()}
</button>
