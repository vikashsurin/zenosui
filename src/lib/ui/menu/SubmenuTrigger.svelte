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
	function handleKeyDown(e: KeyboardEvent) {
		// switch (e.key) {
		// 	case 'ArrowRight':
		// 		e.preventDefault();
		// 		toggleSubmenu();
		// 		break;
		// 	case 'ArrowLeft':
		// 		e.preventDefault();
		// 		if (submenuContext.state.open) {
		// 			// submenuContext.closeSubmenu();
		// 			toggleSubmenu();
		// 		}
		// 		console.log('submenuContext.state.open', submenuContext.state.open);
		// 		break;
		// }
		// toggleSubmenu();
	}
</script>

<MenuItem
	aria-haspopup="true"
	aria-expanded={submenuContext.state.open}
	renderAsSubmenuTrigger={true}
	onclick={handleClick}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	onkeydown={(e: KeyboardEvent) => handleKeyDown(e)}
	{...props}
>
	{#if children}
		{@render children?.()}
	{/if}
</MenuItem>
