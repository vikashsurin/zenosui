<script lang="ts">
	import { getContext } from 'svelte';
	import MenuItem from './MenuItem.svelte';
	import type { SubmenuContextType } from './types.ts';
	import type { MenuItemProps } from '$lib/types/index.ts';
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
	aria-haspopup="true"
	aria-expanded={submenuContext.state.open}
	renderAsSubmenuTrigger={true}
	onclick={handleClick}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	{...props}
>
	{#if children}
		{@render children?.()}
	{/if}
</MenuItem>
