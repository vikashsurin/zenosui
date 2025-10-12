<script lang="ts">
	import SwitchDemo from './SwitchDemo.svelte';
	import source from './SwitchDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../../../lib/internal/components.json' with { type: 'json' };

	const switchComponent = components.switch;
</script>

<DocHeader title={switchComponent.title} description={switchComponent.desc} />

<PreviewCode {source} Component={SwitchDemo} />

<h2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={switchComponent.layout} />

<DocAttributes props={switchComponent.props} otherProps={switchComponent.otherProps} />
