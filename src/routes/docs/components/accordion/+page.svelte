<script lang="ts">
	import AccordionDemo from './AccordionDemo.svelte';
	import source from './AccordionDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../components.json' with { type: 'json' };

	const accordion = components.accordion;
</script>

<DocHeader title={accordion.title} description={accordion.desc} />
<PreviewCode {source} Component={AccordionDemo} />

<h2 class="py-4 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={accordion.layout} />

<h2 class="py-5 text-2xl font-semibold">Attributes</h2>

<DocAttributes attributes={accordion.attributes} />

<h2 class="py-4 text-2xl font-semibold">Accordion Trigger Attributes</h2>
<div>
	<table class="text-left">
		<thead
			><tr>
				<th>Attributes</th>
				<th>Values</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>iconLeft</th>
				<td>Svelte component</td>
			</tr>
			<tr>
				<th>iconRight</th>
				<td>Svelte component</td>
			</tr>
			<tr>
				<th>iconRightOpen</th>
				<td>Svelte component</td>
			</tr>
			<tr>
				<th>iconRightClose</th>
				<td>Svelte component</td>
			</tr>
			<tr>
				<th>iconLeftRotation</th>
				<td>rotation value(10deg, 20deg, etc)</td>
			</tr>
			<tr>
				<th>iconRightRotation</th>
				<td>rotation value</td>
			</tr>
		</tbody>
	</table>
</div>
