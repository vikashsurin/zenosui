<script lang="ts">
	import { DemoNavigation, DemoNavigationList, DemoNavigationItem } from '$lib/ui/index.js';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
</script>

<div>
	<h1>Demo</h1>
	<div>
		<DemoNavigation>
			<DemoNavigationList>
				<DemoNavigationItem label="item 1" />
				<DemoNavigationItem label="item 2" />
				<DemoNavigationItem label="item 3" />
				<DemoNavigationItem
					label="item 4"
					iconRightOpen={ChevronDown}
					iconRightClose={ChevronRight}
				>
					<DemoNavigationList>
						<DemoNavigationItem label="item 4.1" />
						<DemoNavigationItem label="item 4.2" />
						<DemoNavigationItem label="item 4.3" />
					</DemoNavigationList>
				</DemoNavigationItem>
			</DemoNavigationList>
		</DemoNavigation>
	</div>
</div>
