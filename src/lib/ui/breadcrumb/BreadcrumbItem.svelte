<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import Icon from '../icon/Icon.svelte';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import type { BreadcrumbItemProps } from '$lib/types/index.ts';
	import { baseVariant } from '$lib/style/base.js';
	import { TEXT_SIZE_WITH_HEIGHT, TEXT_SIZE_WITH_PADDING } from '$lib/style/sizing.js';
	import type { BreadcrumbContextType } from './types.ts';
	import { getContext } from 'svelte';
	import { page } from '$app/state';

	let {
		children,
		href,
		uiSize,
		uiRounded,
		class: _class,
		...props
	}: BreadcrumbItemProps = $props();

	const context = getContext<BreadcrumbContextType>('breadcrumbContext');
	uiSize = uiSize ?? context?.uiSize;
	uiRounded = uiRounded ?? context?.uiRounded;

	let style = tv({
		extend: baseVariant,
		base: `inline-flex items-center opacity-70 hover:opacity-100 transition-opacity`,
		variants: { uiSize: TEXT_SIZE_WITH_PADDING },
		defaultVariants: {
			uiSize: 'md',
			uiRounded: 'none'
		}
	});
	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class) }));
</script>

<a
	{href}
	class={finalClass}
	{...props}
	style={`${page.url.pathname === href ? ' opacity: 1;' : ''}`}
>
	{#if children}
		{@render children?.()}
	{/if}
</a>
