<script lang="ts">
	import '../app.css';
	import Aside from './Aside.svelte';
	import DocFooter from '$lib/internal/DocFooter.svelte';

	import { page } from '$app/state';
	import { componentList } from '$lib/internal/componentList.js';
	import { docStore } from '$lib/internal/docStore.svelte.js';
	import components from '$lib/internal/components.json' with { type: 'json' };
	import DocHeader from '$lib/internal/DocHeader.svelte';

	let { children } = $props();
	$effect(() => {
		document.documentElement.setAttribute('data-theme', 'light');
	});

	// $inspect({ page });

	function currentPathUrl() {
		const url = page.url.pathname;
		const isComponentRoute = url.includes('components');
		if (isComponentRoute) {
			return url;
		} else {
			return null;
		}
	}
	let componentName = $state<string | undefined>('');
	let component = $derived.by(() => components[componentName]);
	let currentIndex = $derived.by(() =>
		componentList.findIndex((item) => item.href === `/${componentName}`)
	);

	let next = $derived.by(() => componentList[currentIndex + 1]);
	let previous = $derived.by(() => componentList[currentIndex - 1]);
	function initDoc() {
		const url = currentPathUrl();
		componentName = url?.split('/').pop();
	}
	$effect(() => {
		initDoc();
	});
</script>

<div class="grid h-screen grid-cols-12">
	<Aside />

	<div class="col-span-8 col-start-3 p-8">
		<DocHeader title={component?.title} description={component?.desc} {next} {previous} />
		{@render children()}

		<DocFooter {next} {previous} />
	</div>
	<div class="col-span-2 bg-gray-100"></div>
</div>
