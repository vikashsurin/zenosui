<script lang="ts">
	import { getContext, tick } from 'svelte';
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
		items[nextIndex].focus();
	}

	function focusPrevItem() {
		if (items.length === 0) return;

		const currentIndex = items.findIndex((item) => item === document.activeElement);
		const prevIndex =
			currentIndex === -1 ? items.length - 1 : (currentIndex - 1 + items.length) % items.length;
		items[prevIndex].focus();
	}

	$effect(() => {
		if (subMenu && subMenuContext.subMenuState.isOpen) {
			tick().then(() => {
				updateItems();
			});
		}
	});

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'ArrowLeft') {
			subMenuContext.subMenuState.close();
			subMenuContext.subMenuState.setSubMenuTriggerFocus(true);
			subMenuContext.subMenuState.setFirstMenuItemFocus(false);
			e.stopPropagation();
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

	function focusFirstItem() {
		if (items.length > 0) {
			items[0].focus();
		}
	}

	$effect(() => {
		if (subMenuContext.subMenuState.isOpen && subMenuContext.subMenuState.focusFirstMenuItem) {
			focusFirstItem();
		}
	});

	function handleMouseEnter() {
		subMenuContext.subMenuState.open();
	}

	function handleMouseLeave() {
		subMenuContext.subMenuState.close();
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
		id={'subMenu-' + subMenuId}
		aria-labelledby={'subMenu-trigger-' + subMenuId}
		onkeydown={(e) => handleKeyDown(e)}
		onmouseenter={() => handleMouseEnter()}
		onmouseleave={() => handleMouseLeave()}
		class={finalClass}
	>
		{@render children?.()}
	</ul>
{/if}
