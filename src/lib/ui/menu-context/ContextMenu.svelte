<script lang="ts">
	import { setContext, tick } from 'svelte';
	import type { ContextMenuContextType } from './types.ts';

	let { children } = $props();

	let isOpen = $state<boolean>(false);

	let menuId = crypto.randomUUID();
	let menuPosition = $state({ x: 0, y: 0 });

	$inspect({ menuPosition });
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
		focusTrigger: focusTrigger
	};

	let menu = $state<HTMLElement | null>(null);

	async function focusTrigger() {
		await tick();
		const menuTrigger = menu?.querySelector('[data-menu-trigger') as HTMLElement;
		// console.log({ menuTrigger });
		menuTrigger?.focus();
	}

	async function focusFirstMenuItem() {
		await tick();
		const menuItems = menu?.querySelectorAll(
			'[data-menu-item]:not([disabled])'
		) as NodeListOf<HTMLElement>;

		console.log({ menuItems });
		menuItems?.[0]?.focus();
	}

	// focusTrigger();
	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			// focusTrigger();
			ContextMenuState.close();
		}

		if (e.key === 'ArrowDown') {
			console.log('arrowdown');
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
		<li bind:this={menu} role="none" class="" onkeydown={(e) => handleKeyDown(e)}>
			{@render children?.()}
		</li>
	</ul>
</nav>
