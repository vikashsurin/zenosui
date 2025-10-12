<script lang="ts">
	import MeterDemo from './MeterDemo.svelte';
	import source from './MeterDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };

	const meter = components.meter;
</script>

<DocHeader title={meter.title} description={meter.desc} />

<PreviewCode {source} Component={MeterDemo} />

<h2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={meter.layout} />

<DocAttributes props={meter.props} otherProps={meter.otherProps} />
