<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import Icon from '../icon/Icon.svelte';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import type { BreadcrumbItemProps } from '../../types/index.js';
	import { baseVariant } from '../../style/base.js';
	import { TEXT_SIZE, TEXT_SIZE_WITH_HEIGHT, TEXT_SIZE_WITH_PADDING } from '../../style/sizing.js';
	import type { BreadcrumbContextType, BreadcrumbListContextType } from './types.js';
	import { getContext } from 'svelte';
	import { page } from '$app/state';

	let {
		children,
		href,
		uiSize,
		uiRounded,
		separator,
		class: _class,
		...props
	}: BreadcrumbItemProps = $props();

	const context = getContext<BreadcrumbListContextType>('breadcrumbListContext');
	uiSize = uiSize ?? context?.uiSize;
	uiRounded = uiRounded ?? context?.uiRounded;
	let style = tv({
		extend: baseVariant,
		base: `inline-flex items-center opacity-70 hover:opacity-100  `,
		variants: { uiSize: TEXT_SIZE_WITH_PADDING },
		defaultVariants: {}
	});

	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class) }));
</script>

<li
	aria-current={page.url.pathname === href ? 'page' : undefined}
	class="zu_breadcrumb_item"
	style={' display: flex; align-items: center; '}
>
	<a
		{href}
		class={finalClass}
		{...props}
		style={`${page.url.pathname === href ? ' opacity: 1;' : ''}; `}
	>
		{@render children?.()}
	</a>

	<span>
		<Icon
			aria-hidden="true"
			icon={separator ?? ChevronRight}
			uiIconSize={uiSize}
			class="zu_breadcrumb_item_separator opacity-30 hover:opacity-100"
		/>
	</span>
</li>

<style>
	.zu_breadcrumb_item:last-child > span {
		display: none;
		color: red;
	}
</style>
