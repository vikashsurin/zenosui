<script lang="ts">
	import { Navigation, NavigationList, NavigationListItem } from '$lib/ui/index.js';
</script>

<div>
	<Navigation>
		<NavigationList class="w-[200px]">
			<NavigationListItem href="/docs/navigation-list" label="Item 1" />
			<NavigationListItem href="/docs/navigation-list" label="Item 1" />
			<NavigationListItem label="Item 1">
				<NavigationList>
					<NavigationListItem href="/docs/navigation-list" label="Item 1" />
					<NavigationListItem href="/docs/navigation-list" label="Item 1" />
					<NavigationListItem href="https://google.com" label="Item 1" />
				</NavigationList>
			</NavigationListItem>
		</NavigationList>
	</Navigation>
</div>
