<script lang="ts">

	import { Menu, MenuList, MenuItem, MenuTrigger } from '$lib/ui/index.js';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import Submenu from '$lib/ui/menu/Submenu.svelte';
</script>

<div>
	<Menu>
		<MenuTrigger>open</MenuTrigger>
		<MenuList>
			<MenuItem>one</MenuItem>
			<MenuItem>two</MenuItem>
			<MenuItem hasSubMenu iconRight={ChevronRight}>three
				<Submenu>
					<MenuItem>submenu</MenuItem>
					<MenuItem>submenu</MenuItem>
					<MenuItem>submenu</MenuItem>
				</Submenu>
			</MenuItem>
		</MenuList>
	</Menu>
</div>
