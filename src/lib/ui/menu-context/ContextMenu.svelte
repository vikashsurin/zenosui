<script lang="ts">
	import { setContext, tick } from 'svelte';
	import type { ContextMenuContextType } from './types.ts';

	let { children } = $props();

	const menuId = crypto.randomUUID();
	let isOpen = $state(false);
	let menuPosition = $state({ x: 0, y: 0 });
	let menu = $state<HTMLElement | null>(null);

	async function focusTrigger() {
		await tick();
		const trigger = menu?.querySelector('[data-menu-trigger]') as HTMLElement | null;
		trigger?.focus();
	}

	async function focusFirstMenuItem() {
		await tick();
		const menuItems = menu?.querySelectorAll(
			'[data-menu-item]:not([disabled])'
		) as NodeListOf<HTMLElement>;
		menuItems?.[0]?.focus();
	}

	const ContextMenuState = {
		get isOpen() {
			return isOpen;
		},
		open() {
			isOpen = true;
		},
		close() {
			isOpen = false;
		},
		toggleOpen() {
			isOpen = !isOpen;
		},
		get menuPosition() {
			return menuPosition;
		},
		setMenuPosition(position: { x: number; y: number }) {
			menuPosition = position;
		},
		focusTrigger
	};

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			ContextMenuState.close();
			return;
		}

		if (e.key === 'ArrowDown') {
			e.preventDefault();
			focusFirstMenuItem();
		}
	}

	setContext('contextMenuContext', {
		menuId,
		ContextMenuState
	} as ContextMenuContextType);
</script>

<nav>
	<ul>
		<li bind:this={menu} role="none" onkeydown={handleKeyDown}>
			{@render children?.()}
		</li>
	</ul>
</nav>
