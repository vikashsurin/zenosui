<script lang="ts">
	import { setContext, tick } from 'svelte';
	import type { MenubarContextType } from './types.ts';
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '$lib/style/base.js';
	import clsx from 'clsx';
	import { menuBarTheme } from './theme.js';
	let { children, class: _class } = $props();

	let activeMenuId = $state<string | null>(null);

	let menubar = $state<HTMLElement>();
	let items: HTMLElement[] = $state([]);

	// Update items reactively when menubar changes or DOM updates
	$effect(() => {
		if (menubar) {
			items = Array.from(menubar.querySelectorAll('button[data-menu-trigger]'));
		}
	});

	function clearFocus() {
		// Check if there is an active element and if it's not the document body (optional, for older IE compatibility)
		if (document.activeElement && document.activeElement !== document.body) {
			// Ensure the active element is an HTMLElement before calling blur() (useful for TypeScript)
			if (document.activeElement instanceof HTMLElement) {
				document.activeElement.blur();
			}
		}
	}
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

	async function shouldFocusFirstItem() {
		if (!activeMenuId) return;
		await tick();
		const menuItems = menubar?.querySelectorAll(
			`#menu-${activeMenuId} [data-menu-item]:not([disabled])`
		) as NodeListOf<HTMLElement>;

		if (menuItems?.length > 0) {
			menuItems[0].focus();
		}
	}

	function focusNextTrigger() {
		const currentIndex = getCurrentTriggerIndex();
		if (currentIndex === -1) return;

		const nextIndex = (currentIndex + 1) % items.length;
		const nextItem = items[nextIndex];
		if (!nextItem) return;

		nextItem.focus();
		const nextMenuId = nextItem.getAttribute('data-menu-id');

		if (activeMenuId !== null && nextMenuId) {
			activeMenuId = nextMenuId;
			shouldFocusFirstItem();
		}
	}

	function focusLastFocusedTrigger() {
		const currentIndex = getCurrentTriggerIndex();
		if (currentIndex !== -1) {
			items[currentIndex]?.focus();
		}
	}

	function focusPrevTrigger() {
		const currentIndex = getCurrentTriggerIndex();
		if (currentIndex === -1) return;

		const prevIndex = (currentIndex - 1 + items.length) % items.length;
		const prevItem = items[prevIndex];
		if (!prevItem) return;

		prevItem.focus();
		const prevMenuId = prevItem.getAttribute('data-menu-id');

		if (activeMenuId !== null && prevMenuId) {
			activeMenuId = prevMenuId;
			shouldFocusFirstItem();
		}
	}

	// Create menuBarState object once - functions reference reactive state
	const menuBarState = {
		get activeMenuId() {
			return activeMenuId;
		},
		openMenuId(id: string) {
			activeMenuId = id;
		},
		closeMenuId(id: string) {
			focusLastFocusedTrigger();
			if (activeMenuId === id) activeMenuId = null;
		},
		closeAll() {
			activeMenuId = null;
		},
		isOpen(id: string) {
			return activeMenuId === id;
		},
		get hasOpenMenu() {
			return activeMenuId !== null;
		},
		focusNextTrigger,
		focusPrevTrigger
	};

	setContext('menuBarContext', {
		menuBarState
	} as MenubarContextType);

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			if (menuBarState.hasOpenMenu) {
				focusLastFocusedTrigger();
			} else {
				clearFocus();
			}
			e.preventDefault();
			activeMenuId = null;
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

		if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
			shouldFocusFirstItem();
		}
	}

	const style = tv({
		extend: baseVariant,
		base: `flex ${menuBarTheme} w-max p-[0.2em]`
	});

	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<nav>
	<ul bind:this={menubar} role="menubar" onkeydown={handleKeyDown} class={finalClass}>
		{@render children?.()}
	</ul>
</nav>
