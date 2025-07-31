<script lang="ts">
	import { Menu, MenuBar, MenuItem, MenuList, MenuTrigger } from '$lib/ui/index.js';
</script>

<div>
	<h1>Menu bar</h1>
	<MenuBar uiSize="xs">
		<Menu uiRounded="xs">
			<MenuTrigger>Movies</MenuTrigger>
			<MenuList>
				<MenuItem>Godzilla</MenuItem>
				<MenuItem>Kong</MenuItem>
				<MenuItem>Hulk</MenuItem>
				<MenuItem>Superman</MenuItem>
			</MenuList>
		</Menu>
		<Menu uiRounded="xs">
			<MenuTrigger>Movies</MenuTrigger>
			<MenuList>
				<MenuItem>Godzilla</MenuItem>
				<MenuItem>Kong</MenuItem>
				<MenuItem>Hulk</MenuItem>
				<MenuItem>Superman</MenuItem>
			</MenuList>
		</Menu>
		<Menu uiRounded="xs">
			<MenuTrigger>Movies</MenuTrigger>
			<MenuList>
				<MenuItem>Godzilla</MenuItem>
				<MenuItem>Kong</MenuItem>
				<MenuItem>Hulk</MenuItem>
				<MenuItem>Superman</MenuItem>
			</MenuList>
		</Menu>
	</MenuBar>
</div>
