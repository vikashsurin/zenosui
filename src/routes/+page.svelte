<script>
	import DropdownDivider from '$lib/ui/dropdown-menu/DropdownDivider.svelte';
	import DropdownListItem from '$lib/ui/dropdown-menu/DropdownListItem.svelte';
	import Submenu from '$lib/ui/dropdown-menu/Submenu.svelte';
	import {
		Icon,
		Button,
		IconButton,
		Dropdown,
		DropdownMenu,
		DropdownTrigger,
		Sidebar,
		SidebarItem,
		Chip
	} from '$lib/ui/index.js';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import TextInput from '$lib/ui/textInput/TextInput.svelte';

	// function handleClick() {
	// 	console.log('hello there');
	// }
</script>

<div class="m-16">
	<!-- <Button roundedVariant="sm" label="Button" onclick={handleClick} disabled /> -->

	<Button
		href="https://www.google.com"
		roundedVariant="sm"
		onclick={() => console.log('Button clicked')}
		label="Button"
	/>
	<Button
		roundedVariant="sm"
		sizeVariant="xs"
		onclick={() => console.log('Button clicked')}
		label="Button"
		iconRight={ChevronRight}
	/>
	<hr class="my-6" />
	<Button
		roundedVariant="xs"
		sizeVariant="xs"
		onclick={() => console.log('Button clicked')}
		label="Button"
		iconLeft={BadgeCheck}
		iconRight={BadgeCheck}
	/>
	<Button
		roundedVariant="sm"
		sizeVariant="sm"
		onclick={() => console.log('Button clicked')}
		label="Button"
		iconLeft={BadgeCheck}
		iconRight={BadgeCheck}
	/>

	<div>
		<Icon sizeVariant="xs" icon={BadgeCheck} />
	</div>
	<div>
		<IconButton sizeVariant="sm" icon={BadgeCheck} />
	</div>
	<div>
		<Dropdown roundedVariant="sm" sizeVariant="md">
			<DropdownTrigger iconRight={ChevronDown}>Open</DropdownTrigger>
			<DropdownMenu class="">
				<DropdownListItem iconRight={BadgeCheck}>Cut</DropdownListItem>
				<DropdownDivider />
				<DropdownListItem iconRight={BadgeCheck}>Duplicate</DropdownListItem>
				<DropdownListItem>Paste</DropdownListItem>
				<DropdownListItem iconRight={ChevronRight} hasSubMenu
					>More

					<Submenu>
						<DropdownListItem>Copy all</DropdownListItem>
						<DropdownListItem>Merge all</DropdownListItem>
						<DropdownListItem>Delete all</DropdownListItem>
						<DropdownListItem>Archive</DropdownListItem>
					</Submenu>
				</DropdownListItem>
				<DropdownListItem>Divide</DropdownListItem>
				<DropdownDivider />
				<DropdownListItem hasSubMenu iconRight={ChevronRight}
					>Test
					<Submenu>
						<DropdownListItem>Copy all</DropdownListItem>
						<DropdownListItem>Merge all</DropdownListItem>
						<DropdownListItem>Delete all</DropdownListItem>
						<DropdownListItem>Archive</DropdownListItem>
					</Submenu>
				</DropdownListItem>
			</DropdownMenu>
		</Dropdown>
	</div>
	<!-- <div>
		<Sidebar sizeVariant="xs" roundedVariant="xs">
			<SidebarItem iconLeft={ChevronDown} href="https://www.google.com">Item</SidebarItem>
			<SidebarItem>Item</SidebarItem>
			<SidebarItem>Colors</SidebarItem>
			<SidebarItem>Buttons</SidebarItem>
			<SidebarItem>Accessibility</SidebarItem>
		</Sidebar>
	</div> -->
	<div>
		<Chip
			label="Orange"
			sizeVariant="xs"
			roundedVariant="sm"
			iconRight={BadgeCheck}
			class=" bg-amber-500 "
			onclick={() => console.log('helo')}
		/>
	</div>

	<div>
		<TextInput
			variant="outline"
			sizeVariant="sm"
			roundedVariant="xs"
			placeholder="hello"
			iconLeft={BadgeCheck}
			iconRight={BadgeCheck}
		/>
	</div>
</div>
