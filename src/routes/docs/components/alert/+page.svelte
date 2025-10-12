<script lang="ts">
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocPreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import AlertDemo from './AlertDemo.svelte';
	import source from './AlertDemo.svelte?raw';
	import components from '../../../../lib/internal/components.json' with { type: 'json' };
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
</script>

<DocPreviewCode {source} Component={AlertDemo} />

<DocAttributes props={components.alert.props} />
