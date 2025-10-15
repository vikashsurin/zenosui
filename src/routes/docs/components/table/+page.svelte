<script lang="ts">
	import DocPreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import TableDemo from './TableDemo.svelte';
	import source from './TableDemo.svelte?raw';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	const table = components['table'];
</script>

<DocPreviewCode {source} Component={TableDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={table.layout} />
