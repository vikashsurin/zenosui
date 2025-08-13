<script lang="ts">
	import {
		Menu,
		MenuItemCustom,
		MenuList,
		MenuItem,
		MenuTrigger,
		MenuSeparator,
		MenuBar,
		SubMenu
	} from '$lib/ui/index.js';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import Trash2 from '@lucide/svelte/icons/trash-2';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	let checked = $state(true);
</script>

<div>
	<h2 class="py-5 text-2xl">Submenu</h2>
	<Menu uiSize="sm">
		<MenuTrigger>open</MenuTrigger>
		<MenuList>
			<MenuItem iconLeft={BadgeCheck} label="one" />
			<MenuItem label="two" />
			<MenuItem label="three" />
			<MenuItem label="more" iconRight={ChevronRight}>
				<SubMenu>
					<MenuItem iconLeft={Trash2} label="Delete" />
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
</div>
