<script lang="ts">
	import { getContext } from 'svelte';
	import MenuItem from './MenuItem.svelte';
	import type { SubmenuContextType } from './types.js';
	import type { MenuItemProps } from '../../types/index.js';
	let { children, ...props }: MenuItemProps = $props();

	const submenuContext = getContext<SubmenuContextType>('submenuContext');

	function toggleSubmenu() {
		submenuContext.state.open = !submenuContext.state.open;
	}
	function handleClick() {
		toggleSubmenu();
	}
	function handleMouseEnter() {
		submenuContext.openSubmenu();
	}
	function handleMouseLeave() {
		submenuContext.closeSubmenu();
	}
</script>

<MenuItem
	data-submenu-trigger
	aria-haspopup="true"
	aria-expanded={submenuContext.state.open}
	renderAsSubmenuTrigger={true}
	onclick={handleClick}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	{...props}
>
	{@render children?.()}
</MenuItem>
