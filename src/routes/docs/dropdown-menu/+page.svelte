<script lang="ts">
	import {
		Dropdown,
		DropdownTrigger,
		DropdownMenu,
		DropdownListItem,
		DropdownDivider,
		Submenu
	} from '$lib/ui/index.js';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
</script>

<div>
	<Dropdown uiRounded="none" uiSize="md">
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
	<div class="flex gap-2 bg-red-500 w-fit p-2 rounded-sm ">
		<Dropdown uiRounded="none" uiSize="md">
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
		<Dropdown uiRounded="none" uiSize="md">
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
		<Dropdown uiRounded="none" uiSize="md">
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
</div>
