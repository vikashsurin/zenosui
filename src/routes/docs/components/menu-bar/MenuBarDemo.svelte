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
		MenubarSub
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
				<MenubarItem shortcut="⌘N">one</MenubarItem>
				<MenubarItem>two</MenubarItem>
				<MenubarItem>three</MenubarItem>
				<MenubarSub>
					<MenubarSubTrigger iconRight={ChevronRight}>Settings</MenubarSubTrigger>
					<MenubarSubContent>
						<MenubarItem>Profile</MenubarItem>
						<MenubarItem>Profile</MenubarItem>
						<MenubarItem>Profile</MenubarItem>

						<MenubarSub>
							<MenubarSubTrigger iconRight={ChevronRight}>more</MenubarSubTrigger>
							<MenubarSubContent>
								<MenubarItem>Settings</MenubarItem>
								<MenubarItem>Apps</MenubarItem>
								<MenubarItem>Display</MenubarItem>
							</MenubarSubContent>
						</MenubarSub>
					</MenubarSubContent>
				</MenubarSub>
			</MenubarContent>
		</MenubarMenu>
		<MenubarMenu>
			<MenubarTrigger>Edit</MenubarTrigger>
			<MenubarContent>
				<MenubarItem>one</MenubarItem>
				<MenubarItem>two</MenubarItem>
				<MenubarItem>three</MenubarItem>
				<MenubarSub>
					<MenubarSubTrigger iconRight={ChevronRight}>more</MenubarSubTrigger>
					<MenubarSubContent>
						<MenubarItem>Profile</MenubarItem>
						<MenubarItem>Profile</MenubarItem>
						<MenubarItem>Profile</MenubarItem>
					</MenubarSubContent>
				</MenubarSub>
			</MenubarContent>
		</MenubarMenu>
		<MenubarMenu>
			<MenubarTrigger>View</MenubarTrigger>
			<MenubarContent>
				<MenubarItem>one</MenubarItem>
				<MenubarItem>two</MenubarItem>
				<MenubarItem>three</MenubarItem>
				<MenubarSub>
					<MenubarSubTrigger iconRight={ChevronRight}>more</MenubarSubTrigger>
					<MenubarSubContent>
						<MenubarItem>Profile</MenubarItem>
						<MenubarItem>Profile</MenubarItem>
						<MenubarItem>Profile</MenubarItem>
					</MenubarSubContent>
				</MenubarSub>
			</MenubarContent>
		</MenubarMenu>
		<MenubarMenu>
			<MenubarTrigger>Profiles</MenubarTrigger>
			<MenubarContent>
				<MenubarItem>one</MenubarItem>
				<MenubarItem>two</MenubarItem>
				<MenubarItem>three</MenubarItem>
				<MenubarSub>
					<MenubarSubTrigger iconRight={ChevronRight}>more</MenubarSubTrigger>
					<MenubarSubContent>
						<MenubarItem>Profile</MenubarItem>
						<MenubarItem>Profile</MenubarItem>
						<MenubarItem>Profile</MenubarItem>
					</MenubarSubContent>
				</MenubarSub>
			</MenubarContent>
		</MenubarMenu>
	</Menubar>
</div>
