<script lang="ts">
	import CardDemo from './CardDemo.svelte';
	import source from './CardDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };
	import { H2 } from '$lib/index.js';

	const card = components.card;
</script>

<PreviewCode {source} Component={CardDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={card.layout} />

<DocAttributes props={card.props} otherProps={card.otherProps} />
