<script lang="ts">
	import TreeviewDemo from './TreeviewDemo.svelte';
	import source from './TreeviewDemo.svelte?raw';
	import DocPreviewCode from '$lib/internal/DocPreviewCode.svelte';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';
import { H2 } from '$lib/index.js';
	const treeview = components['treeview'];
</script>

<DocPreviewCode {source} Component={TreeviewDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={treeview.layout} />

<DocAttributes otherProps={treeview.otherProps} />
