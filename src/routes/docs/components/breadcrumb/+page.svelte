<script lang="ts">
	import BreadcrumbDemo from './BreadcrumbDemo.svelte';
	import source from './BreadcrumbDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };

	const breadcrumb = components.breadcrumb;
</script>

<PreviewCode {source} Component={BreadcrumbDemo} />

<H2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</H2>

<DocLayoutBox layout={breadcrumb.layout} />

<DocAttributes props={breadcrumb.props} otherProps={breadcrumb.otherProps} />
