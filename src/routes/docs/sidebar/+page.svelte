<script lang="ts">
	import { Sidebar, SidebarItem } from '$lib/ui/index.js';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
</script>

<div>
	<Sidebar sizeVariant="xs" roundedVariant="xs">
		<SidebarItem iconLeft={ChevronDown} href="https://www.google.com">Item</SidebarItem>
		<SidebarItem>Item</SidebarItem>
		<SidebarItem>Colors</SidebarItem>
		<SidebarItem>Buttons</SidebarItem>
		<SidebarItem>Accessibility</SidebarItem>
	</Sidebar>
</div>
