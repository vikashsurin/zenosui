<script lang="ts">
	import { Navigation, NavigationList, NavigationListItem } from '$lib/ui/index.js';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
</script>

<div>
	<Navigation>
		<NavigationList>
			<NavigationListItem href="/docs/navigation-list" label="navigation-list" />
		</NavigationList>
	</Navigation>
</div>
