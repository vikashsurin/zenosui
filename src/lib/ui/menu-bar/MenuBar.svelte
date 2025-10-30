<script lang="ts">
	import { setContext, onMount } from 'svelte';
	import type { MenuBarContextType } from './types.ts';
	let { children } = $props();

	let activeMenuId = $state<string | null>(null);
	let focusFirstMenuItem = $state(false);

	let menuBarState: MenuBarContextType = {
		get activeMenuId() {
			return activeMenuId;
		},
		openMenuId(id: string) {
			activeMenuId = id;
		},
		closeMenuId(id: string) {
			if (activeMenuId === id) activeMenuId = null;
		},
		closeAll() {
			activeMenuId = null;
		},
		isOpen(id: string) {
			return activeMenuId === id;
		},
		get focusFirstMenuItem() {
			return focusFirstMenuItem;
		},
		setFirstMenuItemFocus() {
			focusFirstMenuItem = true;
		},
		resetFirstMenuItemFocus() {
			focusFirstMenuItem = false;
		}
	};

	function anyOpen() {
		return activeMenuId !== null;
	}

	setContext('menuBarContext', {
		menuBarState
	});

	let nav = $state<HTMLElement>();
	let items: HTMLElement[] = $state([]);

	function updateItems() {
		if (nav) {
			items = Array.from(nav.querySelectorAll('ul[role="menubar"] > li > [role="menuitem"]'));
		}
	}

	onMount(() => {
		updateItems();
	});

	function getCurrentTriggerIndex(): number {
		// If a trigger is focused, return its index
		const focusedTriggerIndex = items.findIndex((item) => item === document.activeElement);
		if (focusedTriggerIndex !== -1) return focusedTriggerIndex;

		// If a menu item is focused, find which menu it belongs to
		if (activeMenuId) {
			return items.findIndex((item) => item.getAttribute('data-menu-id') === activeMenuId);
		}

		return -1;
	}

	function focusNextTrigger() {
		const currentIndex = getCurrentTriggerIndex();
		if (currentIndex === -1) return;

		const nextIndex = (currentIndex + 1) % items.length;

		items[nextIndex]?.focus();
		const nextMenuId = items[nextIndex]?.getAttribute('data-menu-id');

		if (anyOpen() && nextMenuId) {
			menuBarState.openMenuId(nextMenuId);
			menuBarState.setFirstMenuItemFocus();
		}
	}

	function focusPrevTrigger() {
		const currentIndex = getCurrentTriggerIndex();
		if (currentIndex === -1) return;

		const prevIndex = (currentIndex - 1 + items.length) % items.length;

		items[prevIndex]?.focus();
		const prevMenuId = items[prevIndex]?.getAttribute('data-menu-id');

		if (anyOpen() && prevMenuId) {
			menuBarState.openMenuId(prevMenuId);
			menuBarState.setFirstMenuItemFocus();
		}
	}

	function handleKeyDown(e: KeyboardEvent) {
		// Update items in case DOM changed
		updateItems();

		if (e.key === 'Escape') {
			const currentIndex = getCurrentTriggerIndex();
			menuBarState.closeAll();
			// Refocus the trigger that was active
			if (currentIndex !== -1) {
				items[currentIndex]?.focus();
			}
			e.preventDefault();
			return;
		}

		if (e.key === 'ArrowLeft') {
			focusPrevTrigger();
			e.preventDefault();
		}

		if (e.key === 'ArrowRight') {
			focusNextTrigger();
			e.preventDefault();
		}

		if (e.key === 'ArrowDown') {
			menuBarState.setFirstMenuItemFocus();
		}
	}
</script>

<nav bind:this={nav} onkeydown={handleKeyDown} class="bg-amber-600 p-4">
	<ul role="menubar" class="flex gap-2">
		{@render children?.()}
	</ul>
</nav>
