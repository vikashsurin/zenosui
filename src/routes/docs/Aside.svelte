<script lang="ts">
	import { Navigation, NavigationList, NavigationListItem } from '$lib/ui/index.js';
	import { componentList } from '$lib/internal/index.js';
	import { page } from '$app/state';
	const asideNavData = [{ label: 'Component Properties', href: '/docs/component-properties' }];

	const path = $derived.by(() => page.url.pathname.split('/').pop());
</script>

<Navigation
	class="h-dvh  w-full overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden "
>
	<NavigationList class="mb-10">
		{#each componentList as item}
			<NavigationListItem
				href={`/docs/components${item.href}`}
				style={`background-color: ${`/${path}` === item.href ? 'var(--theme-background-400)' : ''}`}
				label={item.label}
			>
				{#if item.submenu}
					<NavigationList class="ml-4">
						{#each item.submenu as submenuItem}
							<NavigationListItem
								href={`/docs${submenuItem.href}`}
								style={`background-color: ${`/${path}` === item.href ? 'var(--theme-background-400)' : ''}`}
								label={submenuItem.label}
								class="active"
							/>
						{/each}
					</NavigationList>
				{/if}
			</NavigationListItem>
		{/each}
	</NavigationList>
</Navigation>

<style>
</style>
