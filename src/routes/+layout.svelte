<script lang="ts">
	import '../app.css';
	import { applyTheme } from '$lib/internal/theme.js';
	import Sun from '@lucide/svelte/icons/sun';
	import Moon from '@lucide/svelte/icons/moon';

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

	let isDark = $state(false);

	$effect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			isDark = savedTheme === 'dark';
			applyTheme(savedTheme);
		} else {
			// Optional: detect system preference
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			isDark = prefersDark;
			applyTheme(prefersDark ? 'dark' : 'light');
		}
	});

	function toggleTheme() {
		isDark = !isDark;
		const newTheme = isDark ? 'dark' : 'light';
		applyTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	}
</script>

<div>
	<nav class="sticky top-0 z-999 flex gap-4 px-4 pt-3 pb-6">
		<a href="/" style:opacity={currentPathUrl === '/' ? '1' : '0.5'}> Home </a>

		{#each links as link}
			<a href={link.href} style:opacity={currentPathUrl.includes(link.href) ? '1' : '0.5'}>
				{link.label}
			</a>
		{/each}
		<div class="ml-auto">
			<div>
				<button onclick={toggleTheme}>
					{#if isDark}
						<Sun size="16" />
					{:else}
						<Moon size="16" />
					{/if}
				</button>
			</div>
		</div>
		<div></div>
	</nav>

	{@render children?.()}
</div>
