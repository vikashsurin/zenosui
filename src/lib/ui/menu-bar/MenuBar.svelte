<script lang="ts">
	import { setContext, onMount } from 'svelte';
	import type { MenuBarContextType } from './types.ts';
	let { children } = $props();

	let activeMenuId = $state<string | null>(null);
	let focusFirstMenuItem = $state(false);

	$inspect({ focusFirstMenuItem });
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
            console.log('setting first menu item focus');
			focusFirstMenuItem = true;
		},
		resetFirstMenuItemFocus() {
			focusFirstMenuItem = false;
		},
		get anyOpen() {
			return activeMenuId !== null;
		}
	};

	// function anyOpen() {}

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

		if (menuBarState.anyOpen && nextMenuId) {
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

		if (menuBarState.anyOpen && prevMenuId) {
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
