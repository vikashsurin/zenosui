<script lang="ts">
	import CheckboxDemo from './CheckboxDemo.svelte';
	import source from './CheckboxDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../components.json' with { type: 'json' };

	const checkbox = components.checkbox;
</script>

<DocHeader title={checkbox.title} description={checkbox.desc} />

<PreviewCode {source} Component={CheckboxDemo} />

<h2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={checkbox.layout} />

<DocAttributes props={checkbox.props} otherProps={checkbox.otherProps} />
