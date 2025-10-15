<script lang="ts">
	import IconDemo from './IconDemo.svelte';
	import source from './IconDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };
	import IconColor from './IconColor.svelte';
	import IconSize from './IconSize.svelte';

	const icon = components.icon;
</script>

<PreviewCode {source} Component={IconDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>
<DocLayoutBox layout={icon.layout} />

<IconSize />

<IconColor />

<DocAttributes props={icon.props} />
