<script lang="ts">
	import ChipDemo from './ChipDemo.svelte';
	import source from './ChipDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };

	const chip = components.chip;
</script>

<PreviewCode {source} Component={ChipDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={chip.layout} />

<DocAttributes props={chip.props} otherProps={chip.otherProps} />
