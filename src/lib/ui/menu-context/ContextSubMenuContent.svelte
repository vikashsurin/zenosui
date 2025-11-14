<script lang="ts">
	import { getContext } from 'svelte';
	import type { subMenuContextType } from './types.ts';
	import { baseVariant } from '$lib/style/base.js';
	import clsx from 'clsx';
	import { tv } from 'tailwind-variants';
	import { menuContentTheme } from './theme.js';

	let { children, class: _class } = $props();

	const subMenuContext = getContext<subMenuContextType>('subMenuContext');
	const subMenuId = subMenuContext.subMenuState?.subMenuId;

	let subMenu = $state<HTMLElement>();
	let items: HTMLElement[] = $state([]);

	function updateItems() {
		if (subMenu) {
			items = Array.from(
				subMenu.querySelectorAll(':scope > li > [role="menuitem"]:not([disabled])')
			);
		}
	}

	function focusNextItem() {
		if (items.length === 0) return;
		const currentIndex = items.findIndex((item) => item === document.activeElement);
		const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % items.length;
		items[nextIndex]?.focus();
	}

	function focusPrevItem() {
		if (items.length === 0) return;

		const currentIndex = items.findIndex((item) => item === document.activeElement);
		const prevIndex =
			currentIndex === -1 ? items.length - 1 : (currentIndex - 1 + items.length) % items.length;
		items[prevIndex]?.focus();
	}

	function focusFirstItem() {
		if (items.length > 0) {
			items[0]?.focus();
		}
	}

	$effect(() => {
		if (subMenu && subMenuContext.subMenuState.isOpen) {
			updateItems();
		}
	});

	$effect(() => {
		if (subMenuContext.subMenuState.isOpen && subMenuContext.subMenuState.focusFirstMenuItem) {
			focusFirstItem();
		}
	});

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'ArrowLeft') {
			subMenuContext.subMenuState.close();
			subMenuContext.subMenuState.setSubMenuTriggerFocus(true);
			subMenuContext.subMenuState.setFirstMenuItemFocus(false);
			e.stopPropagation();
			return;
		}

		if (e.key === 'ArrowDown') {
			e.preventDefault();
			e.stopPropagation();
			focusNextItem();
		}
		if (e.key === 'ArrowUp') {
			e.preventDefault();
			e.stopPropagation();
			focusPrevItem();
		}
	}

	const style = tv({
		extend: baseVariant,
		base: `min-w-[8rem] absolute ${menuContentTheme} left-[100%] -translate-y-1/2 top-1/2`
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

{#if subMenuContext.subMenuState.isOpen}
	<ul
		bind:this={subMenu}
		role="menu"
		id={`subMenu-${subMenuId}`}
		aria-labelledby={`subMenu-trigger-${subMenuId}`}
		onkeydown={handleKeyDown}
		onmouseenter={() => subMenuContext.subMenuState.open()}
		onmouseleave={() => subMenuContext.subMenuState.close()}
		class={finalClass}
	>
		{@render children?.()}
	</ul>
{/if}
