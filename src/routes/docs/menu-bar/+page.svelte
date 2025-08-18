<script lang="ts">
	import {
		Menu,
		Menubar,
		MenuItem,
		Submenu,
		MenuList,
		MenuSeparator,
		MenuTrigger,
		MenuRadioGroup
	} from '$lib/ui/index.js';
	import SubmenuContent from '$lib/ui/menu/SubmenuContent.svelte';
	import SubmenuTrigger from '$lib/ui/menu/SubmenuTrigger.svelte';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';

	let bookmarks = $state(false);
	let urls = $state(false);
	let profileRadioValue = $state('benoit');
	$inspect('from ', profileRadioValue);
</script>

<div>
	<h1>Menu bar</h1>
	<Menubar uiSize="xs">
		<Menu>
			<MenuTrigger label="File" />
			<MenuList>
				<MenuItem shortcut="⌘N">one</MenuItem>
				<MenuItem>two</MenuItem>
				<MenuItem>three</MenuItem>
				<Submenu>
					<SubmenuTrigger iconRight={ChevronRight}>Settings</SubmenuTrigger>
					<SubmenuContent>
						<MenuItem>Profile</MenuItem>
						<MenuItem>Profile</MenuItem>
						<MenuItem>Profile</MenuItem>
					</SubmenuContent>
				</Submenu>
			</MenuList>
		</Menu>
		<Menu>
			<MenuTrigger label="Profile" />
			<MenuList>
				<MenuItem>one</MenuItem>
				<MenuItem>two</MenuItem>
				<MenuItem>three</MenuItem>
				<Submenu>
					<SubmenuTrigger iconRight={ChevronRight}>more</SubmenuTrigger>
					<SubmenuContent>
						<MenuItem>Profile</MenuItem>
						<MenuItem>Profile</MenuItem>
						<MenuItem>Profile</MenuItem>
					</SubmenuContent>
				</Submenu>
			</MenuList>
		</Menu>
	</Menubar>
</div>
