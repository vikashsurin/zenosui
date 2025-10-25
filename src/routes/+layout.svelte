<script lang="ts">
	import '../app.css';
	import { applyTheme } from '$lib/internal/theme.js';

	applyTheme('light');
	let { children } = $props();
	import { page } from '$app/state';

	let currentPathUrl = $derived(page.url.pathname);

	let links = [
		{
			label: 'Docs',
			href: '/docs'
		},
		{
			label: 'Themes',
			href: '/themes'
		},
		{
			label: 'Pallete',
			href: '/pallete'
		}
	];
</script>

<div>
	<nav class="sticky top-0 z-999 flex gap-4 px-4 pt-3 pb-6">
		<a href="/" style:color={currentPathUrl === '/' ? 'black' : 'gray'}> Home </a>

		{#each links as link}
			<a href={link.href} style:color={currentPathUrl.includes(link.href) ? 'black' : 'gray'}>
				{link.label}
			</a>
		{/each}
	</nav>

	{@render children?.()}
</div>
