<script lang="ts">
	import ComboboxDemo from './ComboboxDemo.svelte';
	import source from './ComboboxDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };

	const combobox = components.combobox;
</script>

<PreviewCode {source} Component={ComboboxDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={combobox.layout} />

<DocAttributes props={combobox.props} otherProps={combobox.otherProps} />
