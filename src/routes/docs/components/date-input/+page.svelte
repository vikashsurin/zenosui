<script lang="ts">
	import DateInputDemo from './DateInputDemo.svelte';
	import source from './DateInputDemo.svelte?raw';
	import PreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocAttributes from '$lib/internal/DocAttributes.svelte';
	import DocLayoutBox from '$lib/internal/DocLayoutBox.svelte';

	import components from '../../components.json' with { type: 'json' };

	const dateInput = components['date-input'];
</script>

<DocHeader title={dateInput.title} description={dateInput.desc} />

<PreviewCode {source} Component={DateInputDemo} />

<h2 class="mt-20 py-8 text-2xl font-semibold">Component Layout</h2>

<DocLayoutBox layout={dateInput.layout} />

<DocAttributes props={dateInput.props} otherProps={dateInput.otherProps} />
