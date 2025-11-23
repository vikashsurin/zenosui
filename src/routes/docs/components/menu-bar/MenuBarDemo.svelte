<script lang="ts">
	import {
		Menubar,
		MenubarMenu,
		MenubarItem,
		MenubarContent,
		MenubarSeparator,
		MenubarTrigger,
		MenubarRadioGroup,
		MenubarSubContent,
		MenubarSubTrigger,
		MenubarSub,
		MenubarRadioItem,
		MenubarCheckboxItem,
		MenubarShortcut
	} from '$lib/ui/index.js';

	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';

	let bookmarks = $state(false);
	let urls = $state(false);
	let profileRadioValue = $state('benoit');
</script>

<div>
	<Menubar uiSize="xs" class="border-1">
		<MenubarMenu>
			<MenubarTrigger>File</MenubarTrigger>
			<MenubarContent>
				<MenubarItem
					>New Tab

					<MenubarShortcut>⌘T</MenubarShortcut>
				</MenubarItem>
				<MenubarItem
					>New Window

					<MenubarShortcut>⌘N</MenubarShortcut>
				</MenubarItem>
				<MenubarItem>New Incognito Window</MenubarItem>
				<MenubarSeparator />

				<MenubarSub>
					<MenubarSubTrigger iconRight={ChevronRight}>Share</MenubarSubTrigger>
					<MenubarSubContent>
						<MenubarItem>Email link</MenubarItem>
						<MenubarItem>Messages</MenubarItem>
						<MenubarItem>Notes</MenubarItem>
					</MenubarSubContent>
				</MenubarSub>
				<MenubarSeparator />
				<MenubarItem
					>Print
					<MenubarShortcut>⌘P</MenubarShortcut>
				</MenubarItem>
			</MenubarContent>
		</MenubarMenu>

		<MenubarMenu>
			<MenubarTrigger>Edit</MenubarTrigger>
			<MenubarContent>
				<MenubarItem>Undo</MenubarItem>
				<MenubarItem>Redo</MenubarItem>
				<MenubarSeparator />
				<MenubarSub>
					<MenubarSubTrigger iconRight={ChevronRight}>Find</MenubarSubTrigger>
					<MenubarSubContent>
						<MenubarItem>Search the web</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>Find</MenubarItem>
						<MenubarItem>Find Next</MenubarItem>
						<MenubarItem>Find Previous</MenubarItem>
					</MenubarSubContent>
				</MenubarSub>
				<MenubarSeparator />
				<MenubarItem>Cut</MenubarItem>
				<MenubarItem>Copy</MenubarItem>
				<MenubarItem>Paste</MenubarItem>
			</MenubarContent>
		</MenubarMenu>

		<MenubarMenu>
			<MenubarTrigger>View</MenubarTrigger>
			<MenubarContent>
				<MenubarCheckboxItem bind:checked={bookmarks}>Always Show Bookmarks</MenubarCheckboxItem>
				<MenubarCheckboxItem bind:checked={urls}>Always Show Full URLs</MenubarCheckboxItem>
				<MenubarSeparator />
				<MenubarItem
					>Reload
					<MenubarShortcut>⌘R</MenubarShortcut>
				</MenubarItem>
				<MenubarItem
					>Force Reload

					<MenubarShortcut>⇧⌘R</MenubarShortcut>
				</MenubarItem>
				<MenubarSeparator />
				<MenubarItem>Toggle Fullscreen</MenubarItem>
				<MenubarSeparator />
				<MenubarItem>Hide Sidebar</MenubarItem>
			</MenubarContent>
		</MenubarMenu>

		<MenubarMenu>
			<MenubarTrigger>Profile</MenubarTrigger>
			<MenubarContent>
				<MenubarRadioGroup bind:value={profileRadioValue} name="profile">
					<MenubarRadioItem value="andy">Andy</MenubarRadioItem>
					<MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
					<MenubarRadioItem value="louis">Louis</MenubarRadioItem>
				</MenubarRadioGroup>
				<MenubarSeparator />
				<MenubarItem>Edit...</MenubarItem>
				<MenubarSeparator />
				<MenubarItem>Add Profile</MenubarItem>
			</MenubarContent>
		</MenubarMenu>
	</Menubar>
</div>
