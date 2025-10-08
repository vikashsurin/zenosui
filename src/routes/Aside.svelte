<script lang="ts">
	import { Navigation, NavigationList, NavigationListItem } from '$lib/ui/index.js';
	import { componentList } from '$lib/internal/index.js';
	import { page } from '$app/state';
	const asideNavData = [
		{ label: 'home', href: '/' },
		{ label: 'pallete', href: '/docs/pallete' }
	];

	const path = $derived.by(() => page.url.pathname.split('/').pop());
</script>

<Navigation
	class=" col-span-2 mb-8 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
>
	<NavigationList>
		{#each asideNavData as item}
			<NavigationListItem href={item.href} label={item.label} />
		{/each}
		{#each componentList as item}
			<NavigationListItem
				href={`/docs/components${item.href}`}
				style={`background-color: ${`/${path}` === item.href ? 'gray' : ''}`}
				label={item.label}
			>
				{#if item.submenu}
					<NavigationList class="ml-4">
						{#each item.submenu as submenuItem}
							<NavigationListItem href={`/docs${submenuItem.href}`} label={submenuItem.label} />
						{/each}
					</NavigationList>
				{/if}
			</NavigationListItem>
		{/each}
	</NavigationList>
</Navigation>
