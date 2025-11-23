<script lang="ts">
	import { getContext } from 'svelte';
	import type { subMenuContextType } from './types.ts';
	import { menuContentTheme } from './theme.js';
	import { baseVariant } from '$lib/style/base.js';
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { DropdownSubMenuContentProps } from '$lib/types/index.ts';
	let { children, class: _class }: DropdownSubMenuContentProps = $props();

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

	// Update items when submenu opens
	$effect(() => {
		if (subMenu && subMenuContext.subMenuState.isOpen) {
			updateItems();
		}
	});

	// Focus first item when requested
	$effect(() => {
		if (subMenuContext.subMenuState.isOpen && subMenuContext.subMenuState.shouldFocusFirstItem) {
			focusFirstItem();
		}
	});

	function handleKeyDown(e: KeyboardEvent) {
		switch (e.key) {
			case 'ArrowLeft':
				subMenuContext.subMenuState.close();
				subMenuContext.subMenuState.requestFocusTrigger(true);
				subMenuContext.subMenuState.requestFocusFirstItem(false);
				e.stopPropagation();
				break;
			case 'ArrowDown':
				e.preventDefault();
				e.stopPropagation();
				focusNextItem();
				break;
			case 'ArrowUp':
				e.preventDefault();
				e.stopPropagation();
				focusPrevItem();
				break;
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
