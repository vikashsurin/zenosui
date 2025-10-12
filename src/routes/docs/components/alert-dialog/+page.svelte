<script lang="ts">
	import AlertDialogDemo from './AlertDialogDemo.svelte';
	import source from './AlertDialogDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };

	const alertDialog = components['alert-dialog'];
</script>

<PreviewCode {source} Component={AlertDialogDemo} />

<h2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={alertDialog.layout} />

<DocAttributes props={alertDialog.props} otherProps={alertDialog.otherProps} />
