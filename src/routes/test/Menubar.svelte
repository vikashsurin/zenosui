<script lang="ts">
	import MenuBar from '$lib/ui/menu-bar/Menubar.svelte';
	import Menu from '$lib/ui/menu-bar/MenubarMenu.svelte';
	import MenuTrigger from '$lib/ui/menu-bar/MenubarTrigger.svelte';
	import MenuContent from '$lib/ui/menu-bar/MenubarContent.svelte';
	import MenuItem from '$lib/ui/menu-bar/MenubarItem.svelte';
	import SubMenu from '$lib/ui/menu-bar/MenubarSub.svelte';
	import SubMenuContent from '$lib/ui/menu-bar/MenubarSubContent.svelte';
	import SubMenuTrigger from '$lib/ui/menu-bar/MenubarSubTrigger.svelte';
	import MenubarShortcut from '$lib/ui/menu-bar/MenubarShortcut.svelte';

	import MenuRadioGroup from '$lib/ui/menu-bar/MenubarRadioGroup.svelte';
	import MenuRadioItem from '$lib/ui/menu-bar/MenubarRadioItem.svelte';

	import MenubarCheckboxItem from '$lib/ui/menu-bar/MenubarCheckboxItem.svelte';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import MenuSeparator from '$lib/ui/menu-bar/MenubarSeparator.svelte';

	let radioValue = $state('banana');

	let bookmarks = $state(false);
	let urls = $state(false);
</script>

<div class="p-8">
	<MenuBar class="border-1">
		<Menu>
			<MenuTrigger>Trigger</MenuTrigger>
			<MenuContent>
				<MenuItem class=""
					>Item 1
					<MenubarShortcut>⌘B</MenubarShortcut>
				</MenuItem>
				<MenuItem>
					{#snippet leftSlot()}
						<img src="https://avatar.iran.liara.run/public" alt="Item 2" class="h-4 w-4" />
					{/snippet}

					Item 2</MenuItem
				>
				<MenuItem>Item 3</MenuItem>
				<MenuSeparator />
				<SubMenu>
					<SubMenuTrigger iconRight={ChevronRight}
						>Submenu
						<span class="text-sm text-gray-400">description</span>
					</SubMenuTrigger>
					<SubMenuContent>
						<MenuItem>Item 10</MenuItem>
						<MenuItem>Item 11</MenuItem>
						<MenuItem>Item 12</MenuItem>

						<SubMenu>
							<SubMenuTrigger>Submenu 2</SubMenuTrigger>
							<SubMenuContent>
								<MenuItem>Item 13</MenuItem>
								<MenuItem>Item 14</MenuItem>
								<MenuItem>Item 15</MenuItem>
							</SubMenuContent>
						</SubMenu>
					</SubMenuContent>
				</SubMenu>
			</MenuContent>
		</Menu>
		<Menu>
			<MenuTrigger>Trigger 2</MenuTrigger>
			<MenuContent>
				<MenuItem>Item 4</MenuItem>
				<MenuItem>Item 5</MenuItem>
				<MenuItem>Item 6</MenuItem>
				<SubMenu>
					<SubMenuTrigger>Submenu</SubMenuTrigger>
					<SubMenuContent>
						<MenuItem>Item 10</MenuItem>
						<MenuItem>Item 11</MenuItem>
						<MenuItem>Item 12</MenuItem>

						<SubMenu>
							<SubMenuTrigger>Submenu 2</SubMenuTrigger>
							<SubMenuContent>
								<MenuItem>Item 13</MenuItem>
								<MenuItem>Item 14</MenuItem>
								<MenuItem>Item 15</MenuItem>
							</SubMenuContent>
						</SubMenu>
					</SubMenuContent>
				</SubMenu>
			</MenuContent>
		</Menu>
		<Menu>
			<MenuTrigger>Trigger 3</MenuTrigger>
			<MenuContent>
				<MenuItem onclick={() => console.log('clicked')}>Item 7</MenuItem>
				<MenuItem>Item 8</MenuItem>
				<MenuItem>Item 9</MenuItem>
			</MenuContent>
		</Menu>
		<Menu>
			<MenuTrigger>Trigger 4</MenuTrigger>
			<MenuContent>
				<MenuItem>Item 1</MenuItem>
				<MenuItem>Item 2</MenuItem>
				<MenuItem>Item 3</MenuItem>
				<MenuSeparator />
				<MenuRadioGroup name="fruits" bind:value={radioValue}>
					<MenuRadioItem value="orange">Sort by Name</MenuRadioItem>
					<MenuRadioItem value="apple">Sort by Date</MenuRadioItem>
					<MenuRadioItem value="banana">Sort by Size</MenuRadioItem>
				</MenuRadioGroup>
			</MenuContent>
		</Menu>
		<Menu>
			<MenuTrigger>Trigger 5</MenuTrigger>
			<MenuContent>
				<MenubarCheckboxItem bind:checked={bookmarks}>show bookmarks</MenubarCheckboxItem>
				<MenubarCheckboxItem bind:checked={urls}>show urls</MenubarCheckboxItem>
			</MenuContent>
		</Menu>
	</MenuBar>
</div>
