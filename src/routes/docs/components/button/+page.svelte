<script lang="ts">
	import ButtonDemo from './ButtonDemo.svelte';
	import source from './ButtonDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';
	import components from '../../../../lib/internal/components.json' with { type: 'json' };
	import { H1, H2 } from '$lib/index.js';
	import Button from '$lib/ui/button/Button.svelte';
	import buttonSizeSrc from './ButtonSize.svelte?raw';
	import ButtonSize from './ButtonSize.svelte';

	import btnRoundness from './ButtonRounded.svelte?raw';
	import ButtonRoundness from './ButtonRounded.svelte';

	import btnVariants from './ButtonVariants.svelte?raw';
	import ButtonVariants from './ButtonVariants.svelte';

	import btnWithIcons from './ButtonWithIcons.svelte?raw';
	import ButtonWithIcons from './ButtonWithIcons.svelte';

	import btnColors from './ButtonColors.svelte?raw';
	import ButtonColors from './ButtonColors.svelte';

	const button = components.button;
</script>

<PreviewCode {source} Component={ButtonDemo} />

<H2 class="mt-20 py-4 ">Size</H2>
<PreviewCode source={buttonSizeSrc} Component={ButtonSize} />

<H2 class="mt-20 py-4 ">Roundness</H2>
<PreviewCode source={btnRoundness} Component={ButtonRoundness} />

<H2 class="mt-20 py-4 ">Variants</H2>
<PreviewCode source={btnVariants} Component={ButtonVariants} />

<H2 class="mt-20 py-4 ">With Icons</H2>
<PreviewCode source={btnWithIcons} Component={ButtonWithIcons} />

<H2 class="mt-20 py-4 ">Colors</H2>
<PreviewCode source={btnColors} Component={ButtonColors} />

<h2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={button.layout} />

<DocAttributes props={button.props} />
