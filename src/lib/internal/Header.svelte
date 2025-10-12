<script lang="ts">
	import { page } from '$app/state';
	import { getPrev, getNext, docStore } from '$lib/internal/docStore.svelte.js';
	import { componentList } from './componentList.js';

	function findIndex(component: string | undefined) {
		docStore.index = componentList.findIndex((item) => item.href === `/${component}`);
	}

	function isComponentsRoute() {
		return page.url.pathname.includes('components');
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
</script>

<div class="p-4">
	<div class="flex justify-between">
		<h1 class="text-3xl font-bold">{title}</h1>
		<div>
			{#if getPrev() === undefined}
				<div></div>
			{:else}
				<button
					onclick={() => handleclick(getPrev()?.href)}
					class="bg-gray-200 p-2 hover:bg-gray-100 active:bg-gray-300"
					><ArrowLeft size="16" />
				</button>
			{/if}
			<button
				onclick={() => handleclick(getNext()?.href)}
				class="bg-gray-200 p-2 hover:bg-gray-100 active:bg-gray-300"
				><ArrowRight size="16" />
			</button>
		</div>
	</div>
	<p class="py-4">{description}</p>
</div>
