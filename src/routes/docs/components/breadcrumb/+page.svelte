<script lang="ts">
	import BreadcrumbDemo from './BreadcrumbDemo.svelte';
	import source from './BreadcrumbDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../components.json' with { type: 'json' };

	const breadcrumb = components.breadcrumb;
</script>

<DocHeader title={breadcrumb.title} description={breadcrumb.desc} />

<PreviewCode {source} Component={BreadcrumbDemo} />

<h2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={breadcrumb.layout} />

<DocAttributes props={breadcrumb.props} otherProps={breadcrumb.otherProps} />
