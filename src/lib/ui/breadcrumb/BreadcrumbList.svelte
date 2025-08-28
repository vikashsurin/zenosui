<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant } from '$lib/style/base.js';
	import { page } from '$app/state';
	import BreadcrumbItem from './BreadcrumbItem.svelte';
	import type { BreadcrumbListProps, BreadcrumbProps } from '$lib/types/index.ts';
	import { GAP } from '$lib/style/spacing.js';
	import { getContext, setContext } from 'svelte';
	import type { BreadcrumbContextType, BreadcrumbListContextType } from './types.ts';

	let {
		children,
		auto,
		icon,
		uiIconSize,
		uiSize,
		uiRounded,
		class: _class,
		...props
	}: BreadcrumbListProps = $props();

	const context = getContext<BreadcrumbContextType>('breadcrumbContext');

	uiSize = uiSize ?? context?.uiSize;
	uiRounded = uiRounded ?? context?.uiRounded;

	let uiGap = uiSize;
	let style = tv({
		extend: baseVariant,
		base: `flex items-center`,
		variants: {
			uiGap: GAP
		},
		defaultVariants: {}
	});

	type crumb = { href: string; label: string; showSeparator: boolean };
	let crumbs = $state<crumb[]>([]);
	$effect(() => {
		if (auto) {
			const url = page.url;
			const origin = url.origin;
			const items = url.pathname.split('/').filter(Boolean);
			let fullPath = '';
			crumbs = items.map((path, index) => {
				fullPath += `/${path}`;
				console.log({ fullPath });
				return {
					href: origin + fullPath,
					label: path.charAt(0).toUpperCase() + path.slice(1),
					showSeparator: index < items.length - 1
				};
			});
		}
	});

	let element: HTMLOListElement;

	setContext('breadcrumbListContext', { uiSize, uiRounded } as BreadcrumbListContextType);

	const finalClass = $derived(style({ uiGap, class: clsx(_class) }));
</script>

<ol bind:this={element} class={finalClass} {...props}>
	{@render children?.()}
</ol>

