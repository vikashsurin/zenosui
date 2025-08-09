<script lang="ts">
	import { NavigationList, NavigationListItem } from '$lib/ui/index.js';
	import NavigationSubList from '$lib/ui/navigation-list/NavigationSubList.svelte';

	import ChevronDown from '@lucide/svelte/icons/chevron-down';
</script>

<div>
	<NavigationList uiSize="md" class="bg-gray-300">
		<NavigationListItem href="/">link is very long and lengthy</NavigationListItem>
		<NavigationListItem>link</NavigationListItem>
		<NavigationListItem>link</NavigationListItem>
		<NavigationListItem
			hasList={true}
			iconRight={ChevronDown}
			class=" active:bg-green-500"
			label="more"
		>
			<NavigationSubList position='right' class="">
				<NavigationListItem>new link</NavigationListItem>
				<NavigationListItem>new link</NavigationListItem>
			</NavigationSubList>
		</NavigationListItem>
		<NavigationListItem>link</NavigationListItem>
	</NavigationList>
</div>
