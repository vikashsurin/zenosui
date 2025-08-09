<script lang="ts">
	import { NavigationList, NavigationListItem, NavigationSubList } from '$lib/ui/index.js';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
</script>

<div class="h-dvh border-r-1 p-4">
	<NavigationList uiSize="md" class="w-full">
		<NavigationListItem href="/" activeClass="bg-red-400">home</NavigationListItem>
		<NavigationListItem hasList={true} label="primitives">
			<NavigationSubList class="">
				<NavigationListItem href="/docs/primitives/link">link</NavigationListItem>
			</NavigationSubList>
		</NavigationListItem>
		<NavigationListItem href="/pallete">pallete</NavigationListItem>
		<NavigationListItem href="/docs/button">button</NavigationListItem>
		<NavigationListItem href="/docs/icon-button">icon button</NavigationListItem>
		<NavigationListItem href="/docs/icon">icon</NavigationListItem>
		<NavigationListItem href="/docs/text-input">text input</NavigationListItem>
		<NavigationListItem href="/docs/chip">chip</NavigationListItem>
		<NavigationListItem href="/docs/alert">alert</NavigationListItem>
		<NavigationListItem href="/docs/dialog">dialog</NavigationListItem>
		<NavigationListItem href="/docs/toast">toast</NavigationListItem>
		<NavigationListItem href="/docs/link">link</NavigationListItem>
		<NavigationListItem href="/docs/menu">menu</NavigationListItem>
		<NavigationListItem href="/docs/menu-bar">menu bar</NavigationListItem>
		<NavigationListItem href="/docs/navigation-menu">navigation-menu</NavigationListItem>
		<NavigationListItem href="/docs/navigation-list">navigation-list</NavigationListItem>
		<NavigationListItem href="/docs/radio">radio</NavigationListItem>
		<NavigationListItem href="/docs/checkbox">checkbox</NavigationListItem>
		<NavigationListItem href="/docs/accordion">accordion</NavigationListItem>
		<NavigationListItem href="/docs/select">select</NavigationListItem>
		<NavigationListItem href="/docs/switch">switch</NavigationListItem>
		<NavigationListItem href="/docs/tooltip">tooltip</NavigationListItem>
		<NavigationListItem href="/docs/carousel">carousel</NavigationListItem>
		<NavigationListItem href="/docs/tabs">tabs</NavigationListItem>
		<NavigationListItem href="/docs/meter">meter</NavigationListItem>
		<NavigationListItem href="/docs/window-splitter">window-splitter</NavigationListItem>
	</NavigationList>
</div>
