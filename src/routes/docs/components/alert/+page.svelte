<script lang="ts">
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocPreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import AlertDemo from './AlertDemo.svelte';
	import source from './AlertDemo.svelte?raw';
	import components from '../../components.json' with { type: 'json' };
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
</script>

<DocHeader title={components.alert.title} description={components.alert.desc} />

<DocPreviewCode {source} Component={AlertDemo} />

<DocAttributes props={components.alert.props} />
