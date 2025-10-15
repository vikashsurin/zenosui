<script lang="ts">
	import SelectDemo from './SelectDemo.svelte';
	import source from './SelectDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };

	const select = components.select;
</script>

<PreviewCode {source} Component={SelectDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={select.layout} />

<DocAttributes props={select.props} />
