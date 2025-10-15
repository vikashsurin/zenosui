<script lang="ts">
	import H2 from '$lib/ui/atoms/headings/H2.svelte';
	import { properties } from './componentProperties.js';
	let {
		props,
		otherProps
	}: { props?: string[]; otherProps?: { name: string; props: string[] }[] } = $props();

	$inspect(otherProps);
</script>

{#if props}
	<H2 class="mt-20 text-2xl font-semibold">Props</H2>
	<table class="w-full text-left text-sm">
		<thead class="border-b">
			<tr>
				<th class="border-b p-2 font-medium">Property</th>
				<th class="p-2 font-medium">Type</th>
			</tr>
		</thead>
		<tbody class="">
			{#each props as attribute}
				<tr class="border-b">
					<th class="p-2 font-semibold">{attribute}</th>
					<td class="p-2">{properties[attribute]}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}

{#if otherProps}
	{#each otherProps as attribute}
		<H2 class="mt-20 text-2xl font-semibold">{attribute.name}</H2>
		<table class="w-full text-left text-sm">
			<thead class="border-b">
				<tr>
					<th class="border-b p-2 font-medium">Property</th>
					<th class="p-2 font-medium">Type</th>
				</tr>
			</thead>
			<tbody class="">
				{#each attribute.props as val}
					<tr class="border-b">
						<th class="p-2">{val}</th>
						<td class="p-2">{properties[val]}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/each}
{/if}
