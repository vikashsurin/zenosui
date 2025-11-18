<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import type { MenubarContextType, MenuContextType } from './types.ts';

	let { children } = $props();

	// Generate ID once on component initialization (constant, doesn't need to be reactive)
	const menuId = crypto.randomUUID();
	const menuBarContext = getContext<MenubarContextType>('menuBarContext');

	const isOpen = $derived(menuBarContext.menuBarState.isOpen(menuId));

	function closeMenu() {
		console.log('9 wasd caled');
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
