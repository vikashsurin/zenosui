<script lang="ts">
	import DialogDemo from './DialogDemo.svelte';
	import source from './DialogDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../components.json' with { type: 'json' };

	const dialog = components.dialog;
</script>

<DocHeader title={dialog.title} description={dialog.desc} />

<PreviewCode {source} Component={DialogDemo} />

<h2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={dialog.layout} />

<DocAttributes props={dialog.props} otherProps={dialog.otherProps} />
