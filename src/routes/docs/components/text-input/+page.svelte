<script lang="ts">
	import TextInputDemo from './TextInputDemo.svelte';
	import source from './TextInputDemo.svelte?raw';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };
	import DocPreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';
	import { H2 } from '$lib/index.js';

	import sourceWithRounded from './TextInputDemoRounded.svelte?raw';
	import TextInputDemoRounded from './TextInputDemoRounded.svelte';

	import sourceWithIcons from './TextInputtDemoWithIcons.svelte?raw';
	import TextInputtDemoWithIcons from './TextInputtDemoWithIcons.svelte';

	import TextInputtDemoWithButton from './TextInputtDemoWithButton.svelte';
	import sourceWithBtn from './TextInputtDemoWithButton.svelte?raw';

	const textInput = components['text-input'];
</script>

<H2 class="mt-20 py-8 text-2xl font-semibold">Base</H2>
<DocPreviewCode {source} Component={TextInputDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Rounded</H2>

<DocPreviewCode source={sourceWithRounded} Component={TextInputDemoRounded} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Icons</H2>
<DocPreviewCode source={sourceWithIcons} Component={TextInputtDemoWithIcons} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Button</H2>
<DocPreviewCode source={sourceWithBtn} Component={TextInputtDemoWithButton} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={textInput.layout} />
