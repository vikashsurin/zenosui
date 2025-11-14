<script lang="ts">
	import { getContext } from 'svelte';
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '$lib/style/base.js';
	import clsx from 'clsx';
	import { activeMenuTrigger, menuTriggerTheme } from './theme.js';
	import { type DropdownMenuContextType } from './types.ts';
	import { TEXT_SIZE } from '$lib/style/sizing.js';

	let { children, uiSize, uiRounded, class: _class } = $props();

	let el = $state<HTMLElement | null>(null);

	const dropdownMenuContext = getContext<DropdownMenuContextType>('dropdownMenuContext');
	const id = dropdownMenuContext.menuId;
	const isOpen = $derived(dropdownMenuContext.dropdownMenuState.isOpen);
	const activeStyle = $derived(isOpen ? activeMenuTrigger : '');

	function toggleMenu() {
		dropdownMenuContext.dropdownMenuState.toggleOpen();
	}

	function openMenu() {
		dropdownMenuContext.dropdownMenuState.open();
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

	const style = tv({
		extend: baseVariant,
		base: `${menuTriggerTheme} `,
		variants: {
			uiSize: TEXT_SIZE
		}
	});

	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class, activeStyle) }));
</script>

<button
	data-menu-trigger
	bind:this={el}
	data-menu-id={id}
	role="menuitem"
	aria-haspopup="true"
	aria-expanded={isOpen}
	aria-controls={`menu-${id}`}
	onclick={handleClick}
	tabindex="0"
	onkeydown={handleKeyDown}
	class={finalClass}
>
	{@render children?.()}
</button>
