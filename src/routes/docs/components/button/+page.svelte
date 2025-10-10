<script lang="ts">
	import ButtonDemo from './ButtonDemo.svelte';
	import source from './ButtonDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';
	import components from '../../components.json' with { type: 'json' };

	const button = components.button;
</script>

<DocHeader title={button.title} description={button.desc} />

<PreviewCode {source} Component={ButtonDemo} />

<h2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={button.layout} />

<DocAttributes props={button.props} otherProps={button.otherProps} />
