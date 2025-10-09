<script lang="ts">
	import { properties } from '$lib/internal/componentProperties.js';
</script>

<h1 class="text-3xl font-bold">Component Properties</h1>
<table class="w-full text-base mt-10">
	<thead class="text-left">
		<tr class="border-b">
			<th>Property</th>
			<th>Values</th>
		</tr>
	</thead>
	{#each Object.entries(properties) as [key, value]}
		<tbody>
			<tr>
				<th class="font-medium">{key}</th>
				<td>{value}</td>
			</tr>
		</tbody>
	{/each}
</table>

<style>
	th,
	td {
		padding: 8px;
		text-align: left;
	}
</style>
