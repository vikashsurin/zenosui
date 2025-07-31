<script lang="ts">
	import {
		Menu,
		MenuItemCustom,
		MenuList,
		MenuItem,
		MenuTrigger,
		MenuSeparator,
		MenuBar
	} from '$lib/ui/index.js';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import Submenu from '$lib/ui/menu/SubMenu.svelte';
	import Trash2 from '@lucide/svelte/icons/trash-2';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
</script>

<div>
	<h2 class="py-5 text-2xl">Submenu</h2>
	<Menu uiSize="sm">
		<MenuTrigger>open</MenuTrigger>
		<MenuList>
			<MenuItem uiRounded="none" iconLeft={BadgeCheck}>one1</MenuItem>
			<MenuItem>two</MenuItem>
			<MenuItem hasSubMenu iconRight={ChevronRight}>
				three
				<Submenu>
					<MenuItem onclick={() => console.log('from submenu')}>Edit</MenuItem>
					<MenuItem>Draft it</MenuItem>
					<MenuItem iconRight={ChevronRight} hasSubMenu>
						More
						<Submenu>
							<MenuItem>Up</MenuItem>
							<MenuItem iconRight={ChevronRight}>Down</MenuItem>
							<MenuItem>Left</MenuItem>
							<MenuItem>Right</MenuItem>
							<MenuItem hasSubMenu iconRight={ChevronRight}
								>Dinosaur Type
								<Submenu>
									<MenuItem>T-Rex</MenuItem>
									<MenuItem>Brachisauraus</MenuItem>
								</Submenu>
							</MenuItem>
							<MenuItem>Jurassic Park</MenuItem>
						</Submenu>
					</MenuItem>
					<MenuSeparator />
					<MenuItem
						iconLeft={Trash2}
						class="text-red-600"
						onclick={() => console.log('delete was called')}
						>Delete
					</MenuItem>
				</Submenu>
			</MenuItem>
		</MenuList>
	</Menu>
</div>
