<script lang="ts">
	import { Tabs, Tab, TabBar, TabTrigger, TabContent } from '$lib/ui/index.js';
</script>

<div>
	<h1>Tabs</h1>

	<Tabs>
		<TabBar>
			<TabTrigger activeClass="bg-gray-100 " id="tab1">Tab 1</TabTrigger>
			<TabTrigger id="tab2">Tab 2</TabTrigger>
			<TabTrigger id="tab3">Tab 3</TabTrigger>
		</TabBar>
		<TabContent id="tab1">TabContent 1</TabContent>
		<TabContent id="tab2">TabContent 2</TabContent>
		<TabContent id="tab3">TabContent 3</TabContent>
	</Tabs>
</div>
