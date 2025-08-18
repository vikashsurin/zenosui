<script lang="ts">
	import {
		Menu,
		MenuItemCustom,
		MenuList,
		MenuItem,
		MenuTrigger,
		MenuSeparator,
		Submenu
	} from '$lib/ui/index.js';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import Trash2 from '@lucide/svelte/icons/trash-2';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	let checked = $state(true);
</script>

<div>
	<h2 class="py-5 text-2xl">Submenu</h2>
	<Menu>
		<MenuTrigger>open</MenuTrigger>
		<MenuList>
			<MenuItem iconLeft={BadgeCheck}>one</MenuItem>
		</MenuList>
	</Menu>
</div>
