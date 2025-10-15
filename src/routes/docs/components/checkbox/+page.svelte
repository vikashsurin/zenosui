<script lang="ts">
	import CheckboxDemo from './CheckboxDemo.svelte';
	import source from './CheckboxDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };
	import { H2 } from '$lib/index.js';
	const checkbox = components.checkbox;
</script>

<PreviewCode {source} Component={CheckboxDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={checkbox.layout} />

<DocAttributes props={checkbox.props} otherProps={checkbox.otherProps} />
