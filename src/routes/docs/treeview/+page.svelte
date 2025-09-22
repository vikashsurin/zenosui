<script lang="ts">
	import { Treeview, TreeviewItem } from '$lib/index.js';
	import { ListItem } from '$lib/index.js';
	import Label from '$lib/ui/atoms/Label.svelte';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
</script>

<div>
	<h1>Treeview</h1>

	<Treeview class="w-[200px] bg-amber-300" uiSize="xs">
		<TreeviewItem label="Item 1" />
		<TreeviewItem label="Item 2" iconLeftClose={ChevronRight} iconLeftOpen={ChevronDown}>
			<Treeview>
				<TreeviewItem label="index.html" />
				<TreeviewItem label="Item 2.2" />
				<TreeviewItem label="Item 2.3" />
				<TreeviewItem label="Item 2.4"></TreeviewItem>
				<TreeviewItem iconLeftClose={ChevronRight} iconLeftOpen={ChevronDown} label="Item 2.5">
					<Treeview>
						<TreeviewItem label="Item 2.5.1" />
						<TreeviewItem label="Item 2.5.2" />
						<TreeviewItem label="Item 2.5.3" />
						<TreeviewItem
							iconLeftOpen={ChevronDown}
							iconLeftClose={ChevronRight}
							label="Item 2.5.4"
						>
							<Treeview>
								<TreeviewItem label="Item 2.5.4.1" />
								<TreeviewItem label="Item 2.5.4.2" />
								<TreeviewItem label="Item 2.5.4.3" />
								<TreeviewItem label="Item 2.5.4.4" onclick={() => console.log('clicked')} />
							</Treeview>
						</TreeviewItem>
					</Treeview>
				</TreeviewItem>
			</Treeview>
		</TreeviewItem>
		<TreeviewItem label="Item 3" />
		<TreeviewItem label="Item 4" />
	</Treeview>
</div>
