<script lang="ts">
	import DialogDemo from './DialogDemo.svelte';
	import source from './DialogDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';
import { H2 } from '$lib/index.js';
	import components from '../../../../lib/internal/components.json' with { type: 'json' };

	const dialog = components.dialog;
</script>

<PreviewCode {source} Component={DialogDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={dialog.layout} />

<DocAttributes props={dialog.props} otherProps={dialog.otherProps} />
