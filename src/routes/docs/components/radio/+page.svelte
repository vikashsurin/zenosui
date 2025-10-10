<script lang="ts">
	import RadioDemo from './RadioDemo.svelte';
	import source from './RadioDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../components.json' with { type: 'json' };

	const radio = components.radio;
</script>

<DocHeader title={radio.title} description={radio.desc} />

<PreviewCode {source} Component={RadioDemo} />

<h2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={radio.layout} />

<DocAttributes props={radio.props} otherProps={radio.otherProps} />
