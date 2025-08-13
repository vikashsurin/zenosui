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
	<MenuBar uiSize="sm">
		<Menu>
			<MenuTrigger label="File" />
			<MenuList>
				<MenuItem label="New Tab" />
				<MenuItem label="New Window" />
				<MenuItem label="New Incognito Window" />
				<MenuItem label="more" iconRight={ChevronRight}>
					<SubMenu>
						<MenuItem label="Save all people" />
						<MenuItem label="Apply " iconRight={ChevronRight}>
							<SubMenu>
								<MenuItem label="cancel" />
								<MenuItem label="settings" />
							</SubMenu>
						</MenuItem>
					</SubMenu>
				</MenuItem>
			</MenuList>
		</Menu>
		<Menu>
			<MenuTrigger label="Edit" />
			<MenuList>
				<MenuItem label="Undo" />
				<MenuItem label="Redo" />
				<MenuSeparator />
				<MenuItem label="Find" />
				<MenuSeparator />
				<MenuItem label="Cut" />
				<MenuItem label="Copy" />
				<MenuItem label="Paste" />
			</MenuList>
		</Menu>
		<!-- 
		<Menu uiSize="sm">
			<MenuTrigger label="View" />
			<MenuList>
				<MenuItem
					type="checkbox"
					bind:checked={bookmarks}
					
					label="Always Show Bookmark Bar"
				/>
				<MenuItem
					type="checkbox"
					bind:checked={urls}
					
					label="Always Show Full URLs"
				/>
				<MenuSeparator />
				<MenuItem  label="Reload" />
				<MenuItem  label="Force Reload" />
				<MenuSeparator />
				<MenuItem  label="Toggle Fullscreen" />
				<MenuItem  label="Hide Sidebar" />
			</MenuList>
		</Menu>
		<Menu uiSize="sm">
			<MenuTrigger label="Profiles" />
			<MenuList>
				<MenuRadioGroup bind:value={profileRadioValue} class="">
					<MenuItem type="radio" value="Andy"  label="Andy" />
					<MenuItem type="radio" value="Louis"  label="Louis" />
				</MenuRadioGroup>
				<MenuSeparator />
				<MenuItem  label="Reload" />
				<MenuItem  label="Force Reload" />
				<MenuSeparator />
				<MenuItem  label="Toggle Fullscreen" />
				<MenuItem  label="Hide Sidebar" />
			</MenuList>
		</Menu> -->
	</MenuBar>
</div>
