<script lang="ts">
	import { Navigation, NavigationList, NavigationListItem } from '$lib/ui/index.js';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
</script>

<div class="h-dvh overflow-auto border-r-1 p-4">
	<Navigation>
		<NavigationList uiSize="md" class="w-full">
			<NavigationListItem href="/" label="home" activeClass="bg-red-400" />
			<NavigationListItem
				label="primitives"
				iconRightOpen={ChevronDown}
				iconRightClose={ChevronRight}
			>
				<NavigationList class="ml-4">
					<NavigationListItem href="/docs/primitives/link" label="link" />
				</NavigationList>
			</NavigationListItem>
			<NavigationListItem href="/pallete" label="pallete" />
			<NavigationListItem href="/docs/button" label="button" />
			<NavigationListItem href="/docs/icon-button" label="icon button" />
			<NavigationListItem href="/docs/icon" label="icon" />
			<NavigationListItem href="/docs/text-input" label="text input" />
			<NavigationListItem href="/docs/chip" label="chip" />
			<NavigationListItem href="/docs/alert" label="alert" />
			<NavigationListItem href="/docs/dialog" label="dialog" />
			<NavigationListItem href="/docs/toast" label="toast" />
			<NavigationListItem href="/docs/menu" label="menu" />
			<NavigationListItem href="/docs/menu-bar" label="menu bar" />
			<NavigationListItem href="/docs/navigation-menu" label="navigation-menu" />
			<NavigationListItem href="/docs/navigation-list" label="navigation-list" />
			<NavigationListItem href="/docs/radio" label="radio" />
			<NavigationListItem href="/docs/checkbox" label="checkbox" />
			<NavigationListItem href="/docs/accordion" label="accordion" />
			<NavigationListItem href="/docs/select" label="select" />
			<NavigationListItem href="/docs/switch" label="switch" />
			<NavigationListItem href="/docs/tooltip" label="tooltip" />
			<NavigationListItem href="/docs/carousel" label="carousel" />
			<NavigationListItem href="/docs/tabs" label="tabs" />
			<NavigationListItem href="/docs/meter" label="meter" />
			<NavigationListItem href="/docs/window-splitter" label="window-splitter" />
			<NavigationListItem href="/docs/pin-input" label="pin-input" />
			<NavigationListItem href="/docs/breadcrumb" label="breadcrumb" />
			<NavigationListItem href="/docs/combobox" label="combobox" />
			<NavigationListItem href="/docs/range-input" label="range input" />
			<NavigationListItem href="/docs/date-input" label="date input" />
			<NavigationListItem href="/docs/snackbar" label="snackbar" />
			<NavigationListItem href="/docs/treeview" label="treeview" />
			<NavigationListItem href="/docs/table" label="table" />
			<NavigationListItem href="/docs/card" label="card" />
		</NavigationList>
	</Navigation>
</div>
