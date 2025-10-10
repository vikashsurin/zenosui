<script lang="ts">
	import IconDemo from './IconDemo.svelte';
	import source from './IconDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../components.json' with { type: 'json' };

	const icon = components.icon;
</script>

<DocHeader title={icon.title} description={icon.desc} />

<PreviewCode {source} Component={IconDemo} />

<h2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={icon.layout} />

<DocAttributes props={icon.props} otherProps={icon.otherProps} />
