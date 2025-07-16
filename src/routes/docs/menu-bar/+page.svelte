<script lang="ts">


	import { Menu, Menubar, MenuItem, MenuList, MenuTrigger } from '$lib/ui/index.js';
</script>

<div>
	<h1>Menu bar</h1>
	<Menubar>
		<Menu uiSize="sm" uiRounded="xs">
			<MenuTrigger>Movies</MenuTrigger>
			<MenuList>
				<MenuItem>Godzilla</MenuItem>
				<MenuItem>Kong</MenuItem>
				<MenuItem>Hulk</MenuItem>
				<MenuItem>Superman</MenuItem>
			</MenuList>
		</Menu>
		<Menu uiSize="sm" uiRounded="xs">
			<MenuTrigger>Movies</MenuTrigger>
			<MenuList>
				<MenuItem>Godzilla</MenuItem>
				<MenuItem>Kong</MenuItem>
				<MenuItem>Hulk</MenuItem>
				<MenuItem>Superman</MenuItem>
			</MenuList>
		</Menu>
		<Menu uiSize="sm" uiRounded="xs">
			<MenuTrigger>Movies</MenuTrigger>
			<MenuList>
				<MenuItem>Godzilla</MenuItem>
				<MenuItem>Kong</MenuItem>
				<MenuItem>Hulk</MenuItem>
				<MenuItem>Superman</MenuItem>
			</MenuList>
		</Menu>
	</Menubar>
</div>