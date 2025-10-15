<script lang="ts">
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { goto } from '$app/navigation';
	import H1 from '$lib/ui/_primitives/headings/H1.svelte';

	let { title, description, next, previous } = $props();

	function handleclick(href: string) {
		console.log({ href });
		goto(`/docs/components${href}`);
	}
</script>

<div class="mb-8">
	<div class="flex justify-between">
		<H1 class="bg-amber-300 px-2  pt-12 text-3xl font-bold">{title}</H1>
		<div class="pt-12">
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
				<button class="bg-gray-100 p-2" onclick={() => handleclick(next?.href)}>
					<ArrowRight size="16" /></button
				>
			{/if}
		</div>
	</div>
	<p class="py-4 opacity-70">{description}</p>
</div>
