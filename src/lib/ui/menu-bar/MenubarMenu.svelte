<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import type { MenuBarContextType, MenuContextType } from './types.ts';

	let { children } = $props();

	// Generate ID once on component initialization (constant, doesn't need to be reactive)
	const menuId = crypto.randomUUID();
	const menuBarContext = getContext<MenuBarContextType>('menuBarContext');

	const isOpen = $derived(menuBarContext.menuBarState.isOpen(menuId));

	function closeMenu() {
		menuBarContext.menuBarState.closeMenuId(menuId);
	}
	
	setContext('menuContext', {
		menuId,
		close: closeMenu,
		isOpen: () => isOpen
	} as MenuContextType);
</script>

<li role="none" class="relative">
	{@render children?.()}
</li>
