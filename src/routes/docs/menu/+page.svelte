<script lang="ts">
	import { Menu, MenuList, MenuItem, MenuTrigger, MenuSeparator } from '$lib/ui/index.js';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import Submenu from '$lib/ui/menu/Submenu.svelte';
</script>

<div>
	<h2 class="py-5 text-2xl">Submenu</h2>
	<Menu uiSize="sm">
		<MenuTrigger>open</MenuTrigger>
		<MenuList>
			<MenuItem uiRounded="none" onclick={() => console.log('aha')}>one1</MenuItem>
			<MenuItem>two</MenuItem>
			<MenuItem hasSubMenu iconRight={ChevronRight}>
				three
				<Submenu>
					<MenuItem>submenu</MenuItem>
					<MenuItem>submenu</MenuItem>
					<MenuItem>submenu</MenuItem>
				</Submenu>
			</MenuItem>
		</MenuList>
	</Menu>
</div>
