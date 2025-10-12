<script lang="ts">
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { goto } from '$app/navigation';

	let { title, description, next, previous } = $props();

	function handleclick(href: string) {
		console.log({ href });
		goto(`/docs/components${href}`);
	}
</script>

<div class="p-4">
	<div class="flex justify-between">
		<h1 class="text-3xl font-bold">{title}</h1>
		<div>
			{#if previous === undefined}
				<div></div>
			{:else}
				<button class="bg-gray-100 p-2" onclick={() => handleclick(previous?.href)}>
					<ArrowLeft size="16" /></button
				>
			{/if}

			{#if next === undefined}
				<div></div>
			{:else}
				<button class="bg-gray-100 p-2" onclick={() => handleclick(next?.href)}> <ArrowRight size="16" /></button>
			{/if}
		</div>
	</div>
	<p class="py-4">{description}</p>
</div>
