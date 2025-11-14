<script lang="ts">
	import DropdownMenu from '$lib/ui/menu-dropdown/DropdownMenu.svelte';
	import DropdownMenuTrigger from '$lib/ui/menu-dropdown/DropdownMenuTrigger.svelte';
	import DropdownMenuContent from '$lib/ui/menu-dropdown/DropdownMenuContent.svelte';
	import DropdownMenuItem from '$lib/ui/menu-dropdown/DropdownMenuItem.svelte';
	import DropdownSubMenu from '$lib/ui/menu-dropdown/DropdownSubMenu.svelte';
	import DropdownSubMenuContent from '$lib/ui/menu-dropdown/DropdownSubMenuContent.svelte';
	import DropdownSubMenuTrigger from '$lib/ui/menu-dropdown/DropdownSubMenuTrigger.svelte';
	import DropdownMenuRadioGroup from '$lib/ui/menu-dropdown/DropdownMenuRadioGroup.svelte';
	import DropdownMenuRadioItem from '$lib/ui/menu-dropdown/DropdownMenuRadioItem.svelte';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	import DropdownMenuCheckboxItem from '$lib/ui/menu-dropdown/DropdownMenuCheckboxItem.svelte';

	let radioValue = $state('banana');

	let bookmarks = $state(false);
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
		<DropdownMenuRadioGroup name="fruits" bind:value={radioValue}>
			<DropdownMenuRadioItem value="apple">Apple</DropdownMenuRadioItem>
			<DropdownMenuRadioItem value="orange">Orange</DropdownMenuRadioItem>
			<DropdownMenuRadioItem value="banana">Banana</DropdownMenuRadioItem>
		</DropdownMenuRadioGroup>
		<DropdownMenuCheckboxItem bind:checked={bookmarks}>Bookmarks</DropdownMenuCheckboxItem>
	</DropdownMenuContent>
</DropdownMenu>
