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

<h2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={accordion.layout} />

<DocAttributes props={accordion.props} otherProps={accordion.otherProps} />
