<script lang="ts">
	import {
		NavigationMenu,
		NavigationMenuBar,
		NavigationMenuGroup,
		NavigationMenuItem,
		NavigationMenuList,
		NavigationMenuTrigger
	} from '$lib/ui/index.js';
</script>

<div>
	<h1>Navigation Menu</h1>
	<NavigationMenuBar>
		<NavigationMenu uiRounded="xs" uiText="sm">
			<NavigationMenuTrigger class="bg-red-400">okay</NavigationMenuTrigger>
			<NavigationMenuList class="w-100 grid-cols-2 bg-gray-200 p-2">
				<NavigationMenuItem href="/" class="w-[200px] bg-red-500 hover:bg-red-600">
					<NavigationMenuGroup>
						<div>
							<h2 class="text-lg">Title</h2>
							<p class="text-nowrap">This is a description.</p>
						</div>
					</NavigationMenuGroup>
				</NavigationMenuItem>

				<NavigationMenuItem class="">
					<div>
						<h2 class="text-lg">Title</h2>
						<p>This is a description.</p>
					</div>
				</NavigationMenuItem>

				<NavigationMenuItem class="">
					<div>
						<h2 class="text-lg">Title</h2>
						<p>This is a description.</p>
					</div>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	</NavigationMenuBar>
</div>
