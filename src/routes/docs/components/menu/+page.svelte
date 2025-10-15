<script lang="ts">
	import MenuDemo from './MenuDemo.svelte';
	import source from './MenuDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';
import { H2 } from '$lib/index.js';
	import components from '../../../../lib/internal/components.json' with { type: 'json' };

	const menu = components.menu;
</script>

<PreviewCode {source} Component={MenuDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={menu.layout} />

<DocAttributes props={menu.props} />
