<script lang="ts">
	import '../app.css';
	import { applyTheme } from '$lib/internal/theme.js';
	import Sun from '@lucide/svelte/icons/sun';
	import Moon from '@lucide/svelte/icons/moon';
	// applyTheme('dark');
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
		let theme = localStorage.getItem('theme');
		console.log('theme', theme);
		applyTheme(theme);
	});

	function toggleTheme() {
		isDark = !isDark;
		if (isDark) {
			applyTheme('dark');
		} else {
			applyTheme('light');
		}
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
	</nav>

	{@render children?.()}
</div>
