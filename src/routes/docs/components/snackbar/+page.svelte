<script lang="ts">
	import SnackbarDemo from './SnackbarDemo.svelte';
	import source from './SnackbarDemo.svelte?raw';

	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';
	import components from '../../../../lib/internal/components.json' with { type: 'json' };

	const snackbar = components.snackbar;
</script>

<PreviewCode {source} Component={SnackbarDemo} />

<div class=" mt-12 border-l-6 border-amber-500 bg-amber-200 p-8">
	<span>
		<strong>Important:</strong>
		<i>
			Unlike any other components, the way to create a snackbar is to use the snackbarManager, which
			is a function which accepts a snackbar object and some parameters. Check the source code to
			see how to use it.
		</i>
	</span>
</div>
