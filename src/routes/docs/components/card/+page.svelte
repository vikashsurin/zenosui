<script lang="ts">
	import CardDemo from './CardDemo.svelte';
	import source from './CardDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../components.json' with { type: 'json' };

	const card = components.card;
</script>

<DocHeader title={card.title} description={card.desc} />

<PreviewCode {source} Component={CardDemo} />

<h2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={card.layout} />

<DocAttributes props={card.props} otherProps={card.otherProps} />
