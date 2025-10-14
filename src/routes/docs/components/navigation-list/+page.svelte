<script lang="ts">
	import NavigationListDemo from './NavigationListDemo.svelte';
	import source from './NavigationListDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };

	const navigationList = components['navigation-list'];
</script>

<PreviewCode {source} Component={NavigationListDemo} />

<h2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={navigationList.layout} />

<DocAttributes props={navigationList.props} />
