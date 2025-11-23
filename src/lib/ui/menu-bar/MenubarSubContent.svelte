<script lang="ts">
	import { getContext } from 'svelte';
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { menuContentTheme } from './theme.js';
	import type { subMenuContextType } from './types.ts';
	import { baseVariant } from '$lib/style/base.js';
	import type { MenubarSubMenuContentProps } from '$lib/types/index.ts';

	let { children, class: _class }: MenubarSubMenuContentProps = $props();

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

	// Typeahead search functionality
	let searchString = $state('');
	let searchTimeout: ReturnType<typeof setTimeout> | null = null;

	// Cleanup timeout on unmount
	$effect(() => {
		return () => {
			if (searchTimeout) {
				clearTimeout(searchTimeout);
				searchTimeout = null;
			}
		};
	});

	function searchByCharacter(char: string) {
		searchString += char.toLowerCase();

		if (searchTimeout) clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => {
			searchString = '';
		}, 500);

		const currentIndex = items.findIndex((item) => item === document.activeElement);
		const startIndex = currentIndex + 1;

		for (let i = 0; i < items.length; i++) {
			const index = (startIndex + i) % items.length;
			const item = items[index];
			const text = item.textContent?.toLowerCase() || '';

			if (text.startsWith(searchString)) {
				item.focus();
				return;
			}
		}
	}

	function handleKeyDown(e: KeyboardEvent) {
		// Handle printable characters for typeahead
		if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
			e.preventDefault();
			searchByCharacter(e.key);
			return;
		}

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
		id={'subMenu-' + subMenuId}
		aria-labelledby={'subMenu-trigger-' + subMenuId}
		onkeydown={handleKeyDown}
		onmouseenter={() => subMenuContext.subMenuState.open()}
		onmouseleave={() => subMenuContext.subMenuState.close()}
		class={finalClass}
	>
		{@render children?.()}
	</ul>
{/if}
