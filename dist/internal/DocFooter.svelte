<script lang="ts">
	import { page } from '$app/state';
	import { componentList } from './index.js';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { goto } from '$app/navigation';
	import { docStore, getPrev, getNext } from './docStore.svelte.js';

	function findIndex(component: string | undefined) {
		docStore.index = componentList.findIndex((item) => item.href === `/${component}`);
	}

	function currentPath() {
		const isComponentsRoute = page.url.pathname.includes('components');
		console.log(isComponentsRoute);
		if (isComponentsRoute) {
			const component = page.url.pathname.split('/').pop();
			console.log({ component });
			findIndex(component);
		}
	}
	$effect(() => {
		currentPath();
	});

	function handleclick(href: string) {
		goto(`/docs/components${href}`);
	}
</script>

<div class="flex justify-between">
	{#if getPrev() === undefined}
		<div></div>{:else}
		<button
			class="flex items-center gap-2 bg-gray-100 px-3 py-2"
			onclick={() => handleclick(getPrev()?.href)}
		>
			<ArrowLeft size="16" />
			{getPrev()?.label}
		</button>
	{/if}

	{#if getNext() === undefined}
		<div></div>
	{:else}
		<button
			class="flex items-center gap-2 bg-gray-100 px-3 py-2"
			onclick={() => handleclick(getNext()?.href)}
		>
			{getNext()?.label}
			<ArrowRight size="16" />
		</button>
	{/if}
</div>
