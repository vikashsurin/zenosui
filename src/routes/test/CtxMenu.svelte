<script lang="ts">
	import ContextMenu from '$lib/ui/menu-context/ContextMenu.svelte';
	import ContextMenuTrigger from '$lib/ui/menu-context/ContextMenuTrigger.svelte';
	import ContextMenuContent from '$lib/ui/menu-context/ContextMenuContent.svelte';
	import ContextMenuItem from '$lib/ui/menu-context/ContextMenuItem.svelte';

	import ContextSubMenu from '$lib/ui/menu-context/ContextSubMenu.svelte';
	import ContextSubMenuContent from '$lib/ui/menu-context/ContextSubMenuContent.svelte';
	import ContextSubMenuTrigger from '$lib/ui/menu-context/ContextSubMenuTrigger.svelte';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
</script>

<ContextMenu>
	<ContextMenuTrigger class="w-[500px] border border-dashed border-gray-400 p-8"
		>Trigger</ContextMenuTrigger
	>
	<ContextMenuContent>
		<ContextMenuItem iconLeft={BadgeCheck} onclick={() => console.log('clickeddd')}
			>Item 1</ContextMenuItem
		>
		<ContextMenuItem>Item 2</ContextMenuItem>
		<ContextMenuItem>Item 3</ContextMenuItem>
		<ContextSubMenu>
			<ContextSubMenuTrigger iconRight={ChevronRight}>Submenu</ContextSubMenuTrigger>
			<ContextSubMenuContent>
				<ContextMenuItem>Item 10</ContextMenuItem>
				<ContextMenuItem>Item 11</ContextMenuItem>
				<ContextMenuItem>Item 12</ContextMenuItem>
			</ContextSubMenuContent>
		</ContextSubMenu>
	</ContextMenuContent>
</ContextMenu>
