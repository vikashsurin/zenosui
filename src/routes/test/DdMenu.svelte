<script lang="ts">
	import DropdownMenu from '$lib/ui/menu-dropdown/DropdownMenu.svelte';
	import DropdownMenuTrigger from '$lib/ui/menu-dropdown/DropdownMenuTrigger.svelte';
	import DropdownMenuContent from '$lib/ui/menu-dropdown/DropdownMenuContent.svelte';
	import DropdownMenuItem from '$lib/ui/menu-dropdown/DropdownMenuItem.svelte';
	import DropdownSubMenu from '$lib/ui/menu-dropdown/DropdownSubMenu.svelte';
	import DropdownSubMenuContent from '$lib/ui/menu-dropdown/DropdownSubMenuContent.svelte';
	import DropdownSubMenuTrigger from '$lib/ui/menu-dropdown/DropdownSubMenuTrigger.svelte';
</script>

<DropdownMenu>
	<DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
	<DropdownMenuContent>
		<DropdownMenuItem>Item 1</DropdownMenuItem>
		<DropdownMenuItem>Item 2</DropdownMenuItem>
		<DropdownMenuItem>Item 3</DropdownMenuItem>
		<DropdownSubMenu>
			<DropdownSubMenuTrigger>Submenu</DropdownSubMenuTrigger>
			<DropdownSubMenuContent>
				<DropdownMenuItem>Item 10</DropdownMenuItem>
				<DropdownMenuItem>Item 11</DropdownMenuItem>
				<DropdownMenuItem>Item 12</DropdownMenuItem>
			</DropdownSubMenuContent>
		</DropdownSubMenu>
	</DropdownMenuContent>
</DropdownMenu>
