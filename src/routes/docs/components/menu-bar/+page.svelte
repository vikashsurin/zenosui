<script lang="ts">
	import MenuBarDemo from './MenuBarDemo.svelte';
	import source from './MenuBarDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };

	const menuBar = components['menu-bar'];
</script>

<PreviewCode {source} Component={MenuBarDemo} />

<h2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={menuBar.layout} />

<DocAttributes props={menuBar.props} />
