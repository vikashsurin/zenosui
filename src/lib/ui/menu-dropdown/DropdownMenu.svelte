<script lang="ts">
	import { setContext, tick } from 'svelte';
	import type { DropdownMenuContextType } from './types.ts';

	let { children } = $props();

	// Generate ID once on component initialization (constant, doesn't need to be reactive)
	const menuId = crypto.randomUUID();
	let isOpen = $state<boolean>(false);
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

		console.log({ menuItems });
		menuItems?.[0]?.focus();
	}
	// Create dropdownMenuState object once - functions reference reactive state
	const dropdownMenuState = {
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
		focusTrigger
	};

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			e.preventDefault();
			focusTrigger();
			dropdownMenuState.close();
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			focusFirstMenuItem();
			// Focus will be handled by DropdownMenuContent
		}
	}

	setContext('dropdownMenuContext', {
		menuId,
		dropdownMenuState
	} as DropdownMenuContextType);
</script>

<nav class="w-max">
	<ul class="w-max">
		<li bind:this={menu} role="none" class="relative w-max" onkeydown={(e) => handleKeyDown(e)}>
			{@render children?.()}
		</li>
	</ul>
</nav>
