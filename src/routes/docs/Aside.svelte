<script lang="ts">
	import { Navigation, NavigationList, NavigationListItem } from '$lib/ui/index.js';
	import { componentList } from '$lib/internal/index.js';
	import { page } from '$app/state';
	const asideNavData = [{ label: 'Component Properties', href: '/docs/component-properties' }];

	const path = $derived.by(() => page.url.pathname.split('/').pop());
</script>

<Navigation class="  h-dvh w-full  overflow-y-scroll ">
	<NavigationList class="mb-10">
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
