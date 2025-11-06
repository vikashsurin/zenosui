<script lang="ts">
	import { setContext, onMount, tick } from 'svelte';
	import type { MenuBarContextType } from './types.ts';
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '$lib/style/base.js';
	import clsx from 'clsx';
	import { menuBarTheme } from './theme.js';
	let { children, class: _class } = $props();

	let activeMenuId = $state<string | null>(null);
	$inspect({ activeMenuId });

	let menuBarState = {
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

		get anyOpen() {
			return activeMenuId !== null;
		},
		focusNextTrigger: focusNextTrigger,
		focusPrevTrigger: focusPrevTrigger,
		focusRecentTrigger: focusRecentTrigger
	};

	setContext('menuBarContext', {
		menuBarState
	} as MenuBarContextType);

	let menubar = $state<HTMLElement>();
	let items: HTMLElement[] = $state([]);

	function updateItems() {
		if (menubar) {
			items = Array.from(menubar.querySelectorAll('ul[role="menubar"] [data-menu-trigger]'));
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
			focusFirstMenuItem();
		}
	}

	function focusRecentTrigger() {
		const currentIndex = getCurrentTriggerIndex();
		if (currentIndex !== -1) {
			items[currentIndex]?.focus();
			console.log(items[currentIndex]);
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
			focusFirstMenuItem();
		}
	}

	async function focusFirstMenuItem() {
		await tick();
		const menuItems = menubar?.querySelectorAll(
			`#menu-${activeMenuId} [data-menu-item]:not([disabled])`
		) as NodeListOf<HTMLElement>;

		if (menuItems?.length > 0) {
			menuItems[0].focus();
		}
	}
	function handleKeyDown(e: KeyboardEvent) {
		// Update items in case DOM changed
		updateItems();

		if (e.key === 'Escape') {
			focusRecentTrigger();
			e.preventDefault();
			menuBarState.closeAll();
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
			focusFirstMenuItem();
		}
		if (e.key === 'Enter' || e.key === ' ') {
			focusFirstMenuItem();
		}
	}

	const dynamic = {
		direction: {
			ltr: 'flex ',
			ttb: 'flex flex-col'
		}
	};

	const style = tv({
		extend: baseVariant,
		base: `${dynamic.direction.ltr} ${menuBarTheme} w-max p-[0.2em]`
	});

	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<nav class="p-4">
	<ul bind:this={menubar} role="menubar" onkeydown={handleKeyDown} class={finalClass}>
		{@render children?.()}
	</ul>
</nav>
