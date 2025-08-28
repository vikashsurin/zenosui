<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant } from '$lib/style/base.js';
	import { page } from '$app/state';
	import BreadcrumbItem from './BreadcrumbItem.svelte';
	import BreadcrumbSeparator from './BreadcrumbSeparator.svelte';
	import type { BreadcrumbProps } from '$lib/types/index.ts';
	import { setContext } from 'svelte';
	import type { BreadcrumbContextType } from './types.ts';
	import { GAP } from '$lib/style/spacing.js';

	let {
		children,
		auto,
		icon,
		uiIconSize,
		uiSize = 'md',
		uiRounded = 'none',
		class: _class,
		...props
	}: BreadcrumbProps = $props();

	let uiGap = uiSize;
	let style = tv({
		extend: baseVariant,
		base: `flex items-center`,
		variants: {
			uiGap: GAP
		},
		defaultVariants: {}
	});

	type crumb = { href: string; label: string };
	let crumbs = $state<crumb[]>([]);
	$effect(() => {
		if (auto) {
			const url = page.url;
			const origin = url.origin;
			const paths = url.pathname.split('/').filter(Boolean);
			let fullPath = '';
			crumbs = paths.map((path) => {
				fullPath += `/${path}`;
				console.log({ fullPath });
				return {
					href: origin + fullPath,
					label: path.charAt(0).toUpperCase() + path.slice(1)
				};
			});
		}
	});
	$inspect(crumbs.length);
	setContext('breadcrumbContext', { uiSize, uiRounded } as BreadcrumbContextType);

	const finalClass = $derived(style({ uiGap, class: clsx(_class) }));
</script>

<ul>
	<li class={finalClass} {...props}>
		{#if auto}
			<BreadcrumbItem href="/">Home</BreadcrumbItem>
			<BreadcrumbSeparator {icon} {uiSize} />
			{#each crumbs as crumb, index (crumb.href)}
				<BreadcrumbItem href={crumb.href}>
					{crumb.label}
				</BreadcrumbItem>
				{#if index < crumbs.length - 1}
					<BreadcrumbSeparator {icon} {uiSize} />
				{/if}
			{/each}
		{:else if children}
			{@render children?.()}
		{/if}
	</li>
</ul>
