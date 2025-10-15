<script lang="ts">
	import source from './RangeInputDemo.svelte?raw';
	import RangeInputDemo from './RangeInputDemo.svelte';

	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';
	import components from '../../../../lib/internal/components.json' with { type: 'json' };

	const rangeInput = components['range-input'];
</script>

<PreviewCode {source} Component={RangeInputDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={rangeInput.layout} />

<DocAttributes props={rangeInput.props} />
