<script lang="ts">
	import NavigationMenuDemo from './NavigationMenuDemo.svelte';

	import source from './NavigationMenuDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };

	const navigationMenu = components['navigation-menu'];
</script>

<PreviewCode {source} Component={NavigationMenuDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={navigationMenu.layout} />

<DocAttributes props={navigationMenu.props} />
