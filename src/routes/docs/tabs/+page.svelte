<script lang="ts">
	import { Tabs, Tab, TabTrigger, TabContent } from '$lib/ui/index.js';
</script>

<div>
	<h1>Tabs</h1>

	<Tabs>
		<Tab>
			<TabTrigger show>Tab 1</TabTrigger>
			<TabContent show>Content for Tab 1</TabContent>
		</Tab>
		<Tab>
			<TabTrigger>Tab 2</TabTrigger>
			<TabContent>Content for Tab 2</TabContent>
		</Tab>
	</Tabs>
</div>
