<script lang="ts">
	import TextInputDemo from './TextInputDemo.svelte';
	import source from './TextInputDemo.svelte?raw';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };
	import DocPreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	const textInput = components['text-input'];
</script>

<DocPreviewCode {source} Component={TextInputDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={textInput.layout} />
