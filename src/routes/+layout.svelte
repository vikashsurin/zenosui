<script lang="ts">
	import '../app.css';
	import Aside from './Aside.svelte';
	import DocFooter from '$lib/internal/DocFooter.svelte';

	import { page } from '$app/state';
	import { componentList } from '$lib/internal/componentList.js';
	import { docStore } from '$lib/internal/docStore.svelte.js';
	import components from '$lib/internal/components.json' with { type: 'json' };
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import { tick } from 'svelte';

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

	let main: HTMLElement;
	let links;

	let items = $state<{ id: string; text: string }[]>([]);
	function getLinks() {
		links = main.querySelectorAll('[data-heading]');
		items = Array.from(links).map((el) => {
			if (!el.id) {
				el.id = el.textContent.trim().toLowerCase().replace(/\s+/g, '-');
			}
			return {
				id: el.id,
				text: el.textContent
			};
		});
		console.log({ links });
	}

	$inspect({ items });

	$effect(() => {
		tick().then(() => {
			getLinks();
		});
	});
</script>

<div class="grid h-screen grid-cols-12">
	<Aside />

	<div bind:this={main} class="col-span-8 col-start-3 p-8">
		<DocHeader title={component?.title} description={component?.desc} {next} {previous} />
		{@render children()}

		<DocFooter {next} {previous} />
	</div>
	<div class="  col-span-2 min-h-dvh bg-gray-300">
		<div class="fixed w-full">
			<h2>on this page</h2>
			{#each items as item}
				<a href={`#${item?.id}`} class="block p-2 hover:bg-gray-200">{item?.text}</a>
			{/each}
		</div>
	</div>
</div>
