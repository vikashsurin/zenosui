<script lang="ts">
	import TooltipDemo from './TooltipDemo.svelte';
	import source from './TooltipDemo.svelte?raw';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };
	import DocPreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import { H2 } from '$lib/index.js';

	const tooltip = components['tooltip'];
</script>

<DocPreviewCode {source} Component={TooltipDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={tooltip.layout} />

<DocAttributes props={tooltip.props} />
