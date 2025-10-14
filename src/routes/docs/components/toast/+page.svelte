<script lang="ts">
	import ToastDemo from './ToastDemo.svelte';
	import source from './ToastDemo.svelte?raw';
	import DocPreviewCode from '$lib/internal/DocPreviewCode.svelte';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };

	const toast = components.toast;
</script>

<DocPreviewCode {source} Component={ToastDemo} />

<div class=" mt-12 border-l-6 border-amber-500 bg-amber-200 p-8">
	<span>
		<strong>Important:</strong>
		<i>
			Unlike any other components, and just like snackbar, the way to create a Toast is to use the
			toastManager, which is a function which accepts a toast object and some parameters. Check
			the source code to see how to use it.
		</i>
	</span>
</div>
