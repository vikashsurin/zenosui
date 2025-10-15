<script lang="ts">
	import IconButtonDemo from './IconButtonDemo.svelte';
	import source from './IconButtonDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };
	import IconButtonSize from './IconButtonSize.svelte';
	import iconBtnSizeSrc from './IconButtonSize.svelte?raw';

	import IconButtonRounded from './IconButtonRounded.svelte';
	import iconBtnRoundedSrc from './IconButtonRounded.svelte?raw';

	import IconButtonColors from './IconButtonColors.svelte';
	import iconBtnColorsSrc from './IconButtonColors.svelte?raw';

	import IconButtonVariants from './IconButtonVariants.svelte';
	import iconBtnVariantsSrc from './IconButtonVariants.svelte?raw';
	import { H2 } from '$lib/index.js';

	const iconButton = components['icon-button'];
</script>

<PreviewCode {source} Component={IconButtonDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={iconButton.layout} />

<H2 class="mt-20 py-4 ">Size</H2>
<PreviewCode source={iconBtnSizeSrc} Component={IconButtonSize} />

<H2 class="mt-20 py-4 ">Roundness</H2>
<PreviewCode source={iconBtnRoundedSrc} Component={IconButtonRounded} />

<H2 class="mt-20 py-4 ">Colors</H2>
<PreviewCode source={iconBtnColorsSrc} Component={IconButtonColors} />

<H2 class="mt-20 py-4 ">Variants</H2>
<PreviewCode source={iconBtnVariantsSrc} Component={IconButtonVariants} />

<DocAttributes props={iconButton.props} />
