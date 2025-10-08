<script lang="ts">
	let { attributes } = $props();
	const attr = {
		uiSize: 'xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl',
		uiRounded: 'none | xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl',
		uiBorder: 'none | xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl',
		uiText: 'xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl',
		uiPadding: 'none | xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl',
		uiVariant: 'solid | outline | dashed | filled | ghost | link',
		uiBg: 'primary | secondary | accent | info | success | warning | error | neutral'
	};

	$inspect({ attributes });
</script>

<div>
	<h2>Attributes</h2>
</div>

<table class="border text-left">
	<thead class="border">
		<tr>
			<th>Attribute</th>
			<th>values</th>
		</tr>
	</thead>
	<tbody class="border">
		{#each attributes as attribute}
			<tr>
				<th>{attribute}</th>
				<td>{attr[attribute]}</td>
			</tr>
		{/each}
	</tbody>
	<tfoot>
		<tr>
			<td> All the props from div</td>
		</tr>
	</tfoot>
</table>
