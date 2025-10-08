<script>
	import DocPreviewCode from '$lib/internal/DocPreviewCode.svelte';
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import horizonDark from 'svelte-highlight/styles/horizon-dark';
	import source from './Demo.svelte?raw';
	const code = source;
</script>

<svelte:head>
	{@html horizonDark}
</svelte:head>

<!-- <Highlight language={typescript} {code} /> -->
<DocPreviewCode source={code} />
