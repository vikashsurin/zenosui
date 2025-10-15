<script lang="ts">
	import PinInputDemo from './PinInputDemo.svelte';
	import source from './PinInputDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';
import { H2 } from '$lib/index.js';
	import components from '../../../../lib/internal/components.json' with { type: 'json' };

	const pinInput = components['pin-input'];
</script>

<PreviewCode {source} Component={PinInputDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={pinInput.layout} />

<DocAttributes props={pinInput.props} />
