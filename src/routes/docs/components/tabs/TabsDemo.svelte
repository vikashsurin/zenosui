<script lang="ts">
	import { Tabs, TabBar, TabTrigger, TabContent } from '$lib/ui/index.js';
</script>

<div>
	<Tabs>
		<TabBar>
			<TabTrigger id="tab1">Tab 1</TabTrigger>
			<TabTrigger id="tab2">Tab 2</TabTrigger>
			<TabTrigger id="tab3">Tab 3</TabTrigger>
		</TabBar>
		<TabContent id="tab1">TabContent 1</TabContent>
		<TabContent id="tab2">TabContent 2</TabContent>
		<TabContent id="tab3">TabContent 3</TabContent>
	</Tabs>
</div>
