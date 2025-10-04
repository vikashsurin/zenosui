<script lang="ts">
	import AccordionDemo from './AccordionDemo.svelte';
	import source from './AccordionDemo.svelte?raw';
	import PreviewCode from '$lib/internal/PreviewCode.svelte';
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import DocFooter from '$lib/internal/DocFooter.svelte';
</script>

<DocHeader
	title="Accordion"
	description="Accordion is a component that is used to display a list of items that can be expanded or collapsed."
/>

<PreviewCode {source} Component={AccordionDemo} />
