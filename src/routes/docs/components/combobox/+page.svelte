<script lang="ts">
	import ComboboxDemo from './ComboboxDemo.svelte';
	import source from './ComboboxDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../components.json' with { type: 'json' };

	const combobox = components.combobox;
</script>

<DocHeader title={combobox.title} description={combobox.desc} />

<PreviewCode {source} Component={ComboboxDemo} />

<h2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={combobox.layout} />

<DocAttributes props={combobox.props} otherProps={combobox.otherProps} />
