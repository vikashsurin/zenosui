<script lang="ts">
	import { getContext } from 'svelte';

	import { type ContextMenuContextType } from './types.ts';
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant } from '$lib/style/base.js';
	import ContextMenu from './ContextMenu.svelte';

	let { children, uiSize, class: _class } = $props();

	let el = $state<HTMLElement | null>(null);

	const contextMenuContext = getContext<ContextMenuContextType>('contextMenuContext');

	// const menuBarContext = getContext<MenuBarContextType>('menuBarContext');
	const id = contextMenuContext.menuId;

	function toggleMenu() {
		contextMenuContext.ContextMenuState.toggleOpen();
	}
	function openMenu() {
		contextMenuContext.ContextMenuState.open();
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
		// if (contextMenuContext) {
		// 	openMenu();
		// }
	}

	function handleContext(e: MouseEvent) {
		e.preventDefault();
		openMenu();

		contextMenuContext.ContextMenuState.setMenuPosition({ x: e.clientX, y: e.clientY });
		console.log(e.clientX);
		console.log(e.clientY);
	}

	const style = tv({
		extend: baseVariant,
		base: '',
		variants: {
			uiSize: ''
		}
	});

	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));

	function handleMouseLeave(e: MouseEvent) {}
</script>

<button
	data-menu-trigger
	bind:this={el}
	data-menu-id={id}
	role="menuitem"
	aria-haspopup="true"
	aria-expanded={contextMenuContext.ContextMenuState.isOpen}
	aria-controls="menu-{id}"
	tabindex="0"
	oncontextmenu={(e) => handleContext(e)}
	class={finalClass}
>
	{@render children?.()}
</button>
<!-- onclick={(e) => handleClick(e)} -->

<!-- onfocus={(e) => handleFocus(e)} -->
<!-- onmouseenter={(e) => handleMouseEnter(e)}
onmouseleave={(e) => handleMouseLeave(e)}
onkeydown={(e: KeyboardEvent) => handleKeyDown(e)} -->
