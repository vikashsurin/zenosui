<script lang="ts">
	import { Navigation, NavigationList, NavigationListItem } from '$lib/ui/index.js';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
</script>

<div>
	<Navigation>
		<NavigationList class="w-[200px]">
			<NavigationListItem href="/docs/navigation-list" label="Item 1" />
			<NavigationListItem href="/docs/navigation-list" label="Item 1" />
			<NavigationListItem label="Item 1" iconRightOpen={ChevronDown} iconRightClose={ChevronRight}>
				<NavigationList class='ml-2'>
					<NavigationListItem href="/docs/navigation-list" label="Item 1" />
					<NavigationListItem href="/docs/navigation-list" label="Item 1" />
					<NavigationListItem href="https://google.com" label="Item 1" />
				</NavigationList>
			</NavigationListItem>
		</NavigationList>
	</Navigation>
</div>
