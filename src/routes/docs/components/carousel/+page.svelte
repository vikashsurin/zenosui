<script lang="ts">
	import CarouselDemo from './CarouselDemo.svelte';
	import source from './CarouselDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };
	import { H2 } from '$lib/index.js';
	const carousel = components.carousel;
</script>

<PreviewCode {source} Component={CarouselDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={carousel.layout} />

<DocAttributes props={carousel.props} otherProps={carousel.otherProps} />
