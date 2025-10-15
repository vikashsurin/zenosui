<script lang="ts">
	import WindowSplitterDemo from './WindowSplitterDemo.svelte';
	import source from './WindowSplitterDemo.svelte?raw';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };
	import DocPreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';
	import { H2 } from '$lib/index.js';
</script>

<DocPreviewCode {source} Component={WindowSplitterDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={components['window-splitter'].layout} />

<DocAttributes props={components['window-splitter'].props} />
