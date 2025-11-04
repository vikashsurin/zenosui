<script lang="ts">
	import ContextMenu from '$lib/ui/menu-context/ContextMenu.svelte';
	import ContextMenuTrigger from '$lib/ui/menu-context/ContextMenuTrigger.svelte';
	import ContextMenuContent from '$lib/ui/menu-context/ContextMenuContent.svelte';
	import ContextMenuItem from '$lib/ui/menu-context/ContextMenuItem.svelte';
</script>

<ContextMenu>
	<ContextMenuTrigger class="w-[500px] border border-dashed border-gray-400 p-8"
		>Trigger</ContextMenuTrigger
	>
	<ContextMenuContent>
		<ContextMenuItem onclick={() => console.log('clickeddd')}>Item 1</ContextMenuItem>
		<ContextMenuItem>Item 2</ContextMenuItem>
		<ContextMenuItem>Item 3</ContextMenuItem>
	</ContextMenuContent>
</ContextMenu>
