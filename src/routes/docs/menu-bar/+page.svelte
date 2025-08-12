<script lang="ts">
	import {
		Menu,
		MenuBar,
		MenuItem,
		SubMenu,
		MenuList,
		MenuSeparator,
		MenuTrigger,
		MenuRadioGroup
	} from '$lib/ui/index.js';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';

	let bookmarks = $state(false);
	let urls = $state(false);
	let profileRadioValue = $state('benoit');
	$inspect('from ', profileRadioValue);
</script>

<div>
	<h1>Menu bar</h1>
	<MenuBar uiSize="sm" uiRounded="sm">
		<Menu uiSize="sm">
			<MenuTrigger label="File" />
			<MenuList>
				<MenuItem uiRounded="none" label="New Tab" />
				<MenuItem uiRounded="none" label="New Window" />
				<MenuItem uiRounded="none" label="New Incognito Window" />
				<MenuItem uiRounded="none" label="more" iconRight={ChevronRight}>
					<SubMenu>
						<MenuItem label="Save" />
						<MenuItem label="Apply" iconRight={ChevronRight}>
							<SubMenu>
								<MenuItem label="cancel" />
								<MenuItem label="settings" />
							</SubMenu>
						</MenuItem>
					</SubMenu>
				</MenuItem>
				<MenuSeparator />
				<MenuItem label="text" />
			</MenuList>
		</Menu>
		<Menu uiSize="sm">
			<MenuTrigger label="Edit" />
			<MenuList>
				<MenuItem uiRounded="none" label="Undo" />
				<MenuItem uiRounded="none" label="Redo" />
				<MenuSeparator />
				<MenuItem uiRounded="none" label="Find" />
				<MenuSeparator />
				<MenuItem uiRounded="none" label="Cut" />
				<MenuItem uiRounded="none" label="Copy" />
				<MenuItem uiRounded="none" label="Paste" />
			</MenuList>
		</Menu>
		<Menu uiSize="sm">
			<MenuTrigger label="View" />
			<MenuList>
				<MenuItem
					type="checkbox"
					bind:checked={bookmarks}
					uiRounded="none"
					label="Always Show Bookmark Bar"
				/>
				<MenuItem
					type="checkbox"
					bind:checked={urls}
					uiRounded="none"
					label="Always Show Full URLs"
				/>
				<MenuSeparator />
				<MenuItem uiRounded="none" label="Reload" />
				<MenuItem uiRounded="none" label="Force Reload" />
				<MenuSeparator />
				<MenuItem uiRounded="none" label="Toggle Fullscreen" />
				<MenuItem uiRounded="none" label="Hide Sidebar" />
			</MenuList>
		</Menu>
		<Menu uiSize="sm">
			<MenuTrigger label="Profiles" />
			<MenuList>
				<MenuRadioGroup bind:value={profileRadioValue} class="">
					<MenuItem type="radio" value="Andy" uiRounded="none" label="Andy" />
					<MenuItem type="radio" value="Louis" uiRounded="none" label="Louis" />
				</MenuRadioGroup>
				<MenuSeparator />
				<MenuItem uiRounded="none" label="Reload" />
				<MenuItem uiRounded="none" label="Force Reload" />
				<MenuSeparator />
				<MenuItem uiRounded="none" label="Toggle Fullscreen" />
				<MenuItem uiRounded="none" label="Hide Sidebar" />
			</MenuList>
		</Menu>
	</MenuBar>
</div>
