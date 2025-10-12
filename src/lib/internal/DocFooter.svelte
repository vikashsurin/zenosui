<script lang="ts">
	import { page } from '$app/state';
	import { componentList } from '$lib/internal/index.js';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { goto } from '$app/navigation';

	let { next, previous } = $props();

	function handleclick(href: string) {
		goto(`/docs/components${href}`);
	}
</script>

<div class="flex justify-between">
	{#if previous !== undefined}
		<button
			class="flex items-center gap-2 bg-gray-100 px-3 py-2"
			onclick={() => handleclick(previous?.href)}
		>
			<ArrowLeft size="16" />
			{previous?.label}
		</button>
	{:else}
		<div></div>
	{/if}

	<button
		class="flex items-center gap-2 bg-gray-100 px-3 py-2"
		onclick={() => handleclick(next?.href)}
	>
		{next?.label}
		<ArrowRight size="16" />
	</button>
</div>
