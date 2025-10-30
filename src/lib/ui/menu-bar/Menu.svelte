<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import type { MenuBarContextType, MenuContextType } from './types.ts';

	let { children } = $props();

	let menuId = crypto.randomUUID();
	const menuBarContext = getContext<MenuBarContextType>('menuBarContext');

	const isOpen = $derived<boolean>(menuBarContext.menuBarState.isOpen(menuId));

	function closeMenu() {
		menuBarContext.menuBarState.closeMenuId(menuId);
	}
	setContext('menuContext', {
		menuId,
		close: () => closeMenu(),
		isOpen: () => isOpen
	} as MenuContextType);
</script>

<li role="none" class="relative border">
	{@render children?.()}
</li>
