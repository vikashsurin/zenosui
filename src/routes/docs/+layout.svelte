<script lang="ts">
	import '../../app.css';
	import Aside from './Aside.svelte';
	import DocFooter from '$lib/internal/DocFooter.svelte';

	import { page } from '$app/state';
	import { componentList } from '$lib/internal/componentList.js';
	import { docStore } from '$lib/internal/docStore.svelte.js';
	import components from '$lib/internal/components.json' with { type: 'json' };
	import DocHeader from '$lib/internal/DocHeader.svelte';
	import { onMount, tick } from 'svelte';

	let { children } = $props();
	$effect(() => {
		document.documentElement.setAttribute('data-theme', 'light');
	});

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
	let headings = $state<HTMLElement[]>([]);

	let items = $state<{ id: string; text: string }[]>([]);

	function getheadings() {
		headings = Array.from(main.querySelectorAll('[data-heading]'));
		items = headings.map((el) => {
			if (!el.id) {
				el.id = el.textContent.trim().toLowerCase().replace(/\s+/g, '-');
			}
			return {
				id: el.id,
				text: el.textContent
			};
		});
	}
	let activeID = $state<string>('');
	let observer: IntersectionObserver | null = null;
	$inspect({ headings });
	// Effect 1: Update headings when URL changes
	$effect(() => {
		if (page.url) {
			tick().then(() => {
				getheadings();
			});
		} else {
			headings = [];
		}
	});

	// Effect 2: Set up observer when headings change
	$effect(() => {
		// Clean up previous observer
		if (observer) {
			observer.disconnect();
		}

		if (headings.length > 0) {
			observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							activeID = entry.target.id;
						}
					});
				},
				{
					rootMargin: '0px 0px -70% 0px',
					// rootMargin: '-50% 0px -50% 0px',
					threshold: 0
				}
			);

			headings.forEach((heading) => {
				observer?.observe(heading);
			});
		}

		return () => {
			observer?.disconnect();
			observer = null;
		};
	});

	$inspect({ activeID });
</script>

<div class="grid grid-cols-[15%_70%_15%]">
	<div class="fixed col-start-1 w-[15%]">
		<Aside />
	</div>

	<div class="fixed right-0 col-start-3 min-h-dvh w-[15%] text-gray-400">
		<h2 class="p-3 text-base font-medium">On this page</h2>
		{#each items as item}
			<a
				href={`#${item?.id}`}
				class:active={activeID === item?.id}
				class="block px-4 py-0.5 text-sm hover:text-gray-800">{item?.text}</a
			>
		{/each}
	</div>

	<div bind:this={main} class="col-start-2 px-8">
		<DocHeader title={component?.title} description={component?.desc} {next} {previous} />

		{@render children()}

		<DocFooter {next} {previous} />
	</div>
</div>

<style>
	.active {
		color: black;
	}
</style>
