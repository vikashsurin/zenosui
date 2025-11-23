<script lang="ts">
	import DropdownMenu from '$lib/ui/menu-dropdown/DropdownMenu.svelte';
	import DropdownMenuCheckboxItem from '$lib/ui/menu-dropdown/DropdownMenuCheckboxItem.svelte';
	import DropdownMenuContent from '$lib/ui/menu-dropdown/DropdownMenuContent.svelte';
	import DropdownMenuItem from '$lib/ui/menu-dropdown/DropdownMenuItem.svelte';
	import DropdownMenuRadioGroup from '$lib/ui/menu-dropdown/DropdownMenuRadioGroup.svelte';
	import DropdownMenuRadioItem from '$lib/ui/menu-dropdown/DropdownMenuRadioItem.svelte';
	import DropdownMenuSeparator from '$lib/ui/menu-dropdown/DropdownMenuSeparator.svelte';
	import DropdownMenuShortcut from '$lib/ui/menu-dropdown/DropdownMenuShortcut.svelte';
	import DropdownMenuTrigger from '$lib/ui/menu-dropdown/DropdownMenuTrigger.svelte';
	import DropdownSubMenu from '$lib/ui/menu-dropdown/DropdownSubMenu.svelte';
	import DropdownSubMenuContent from '$lib/ui/menu-dropdown/DropdownSubMenuContent.svelte';
	import DropdownSubMenuTrigger from '$lib/ui/menu-dropdown/DropdownSubMenuTrigger.svelte';
</script>

<DropdownMenu>
	<DropdownMenuTrigger>File</DropdownMenuTrigger>
	<DropdownMenuContent>
		<DropdownMenuItem>Open</DropdownMenuItem>
		<DropdownMenuItem>Create</DropdownMenuItem>

		<DropdownMenuSeparator />
		<DropdownMenuRadioGroup name="fruits" value="apple">
			<DropdownMenuRadioItem value="apple">Apple</DropdownMenuRadioItem>
			<DropdownMenuRadioItem value="orange">Orange</DropdownMenuRadioItem>
			<DropdownMenuRadioItem value="banana">Banana</DropdownMenuRadioItem>
		</DropdownMenuRadioGroup>
		<DropdownMenuSeparator />
		<DropdownMenuCheckboxItem>Bookmarks</DropdownMenuCheckboxItem>
		<DropdownMenuSeparator />
	</DropdownMenuContent>
</DropdownMenu>
