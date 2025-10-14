<script lang="ts">
	import DocPreviewCode from '$lib/internal/DocPreviewCode.svelte';

	import TabsDemo from './TabsDemo.svelte';
	import source from './TabsDemo.svelte?raw';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	const tabs = components['tabs'];
</script>

<DocPreviewCode {source} Component={TabsDemo} />

<h2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={tabs.layout} />
