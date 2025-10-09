<script lang="ts">
	let { props, otherProps } = $props();
	const attr = {
		uiSize: 'xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl',
		uiRounded: 'none | xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl',
		uiBorder: 'none | xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl',
		uiText: 'xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl',
		uiPadding: 'none | xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl',
		uiVariant: 'solid | outline | dashed | filled | ghost | link',
		uiBg: 'primary | secondary | accent | info | success | warning | error | neutral',
		iconLeft: 'Svelte Component',
		iconRight: 'Svelte Component',
		iconRightOpen: 'Svelte Component',
		iconRightClose: 'Svelte Component',
		iconLeftRotation: 'Rotation value',
		iconRightRotation: 'Rotation value'
	};

	$inspect(otherProps);
</script>

<h2 class="mt-20 text-2xl font-semibold">Props</h2>

<table class="w-full text-left text-sm">
	<thead class="border-b">
		<tr>
			<th class="border-b p-2 font-medium">Property</th>
			<th class="p-2 font-medium">values</th>
		</tr>
	</thead>
	<tbody class="">
		{#each props as attribute}
			<tr class="border-b">
				<th class="p-2 font-semibold">{attribute}</th>
				<td class="p-2">{attr[attribute]}</td>
			</tr>
		{/each}
	</tbody>
</table>

{#if otherProps}
	{#each otherProps as attribute}
		<h2 class="mt-20 text-2xl font-semibold">{attribute.name}</h2>
		<table class="w-full text-left text-sm">
			<thead class="border-b">
				<tr>
					<th class="border-b p-2 font-medium">Property</th>
					<th class="p-2 font-medium">values</th>
				</tr>
			</thead>
			<tbody class="">
				{#each attribute.props as val}
					<tr class="border-b">
						<th class="p-2">{val}</th>
						<td class="p-2">{attr[val]}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/each}
{/if}
