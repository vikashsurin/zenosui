<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Icon } from '../icon/index.ts';
	import { TEXT_SIZE } from '$lib/style/sizing.js';
	import { baseVariant } from '$lib/style/base.js';
	import { getContext } from 'svelte';
	import { navigationListState } from './stateManager.svelte.ts';
	import type { NavigationListItemProps } from '$lib/types/index.ts';
	import type { NavigationListContextType } from './types.ts';
	import { page } from '$app/state';
	let {
		children,
		label,
		iconLeftOpen,
		iconLeftClose,
		iconRightOpen,
		iconRightClose,
		uiSize,
		href,
		class: _class,
		...props
	}: NavigationListItemProps = $props();

	const context = getContext<NavigationListContextType>('navigationListContext');
	uiSize = uiSize ?? context.uiSize;

	let state = $state({
		isSelected: false,
		isExpanded: false
	});
	const id = crypto.randomUUID();

	// The padding values can be configured
	const paddingY = 'py-[0.5em]';
	const paddingX = 'px-[1em]';

	let style = tv({
		extend: baseVariant,
		base: `flex gap-2 bg-gray-100 p-2 w-full items-center hover:bg-gray-200 ${paddingY} ${paddingX} `,
		variants: {
			uiSize: TEXT_SIZE
		},
		defaultVariants: {}
	});

	const isSelected = $derived.by(() => {
		return navigationListState.selectedId === 'treeitem-' + id;
	});

	let iconLeft = $derived.by(() => {
		return state.isExpanded ? iconLeftOpen : iconLeftClose;
	});

	let iconRight = $derived.by(() => {
		return state.isExpanded ? iconRightOpen : iconRightClose;
	});

	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));

	function handleClick(e: MouseEvent) {
		e.stopPropagation();
		let currentTarget = e.currentTarget as HTMLElement;
		navigationListState.selectedId = currentTarget.id;

		if (children) {
			state.isExpanded = !state.isExpanded;
		}
	}
	function handleKeyDown() {}
</script>

<li class=" border-gray-300 aria-[expanded=true]:border-l" role="navigation">
	<a
		tabindex="0"
		aria-current={page.url.pathname === href ? 'page' : undefined}
		data-active={page.url.pathname === href}
		onkeydown={handleKeyDown}
		onclick={(e) => handleClick(e)}
		{href}
		class={finalClass}
		{...props}
	>
		{#if iconLeft}
			<Icon {uiSize} icon={iconLeft} />
		{/if}
		<span>{label ?? 'Item'}</span>
		{#if iconRight}
			<Icon {uiSize} icon={iconRight} class="ml-auto" />
		{/if}
	</a>
	{#if state.isExpanded}
		{@render children?.()}
	{/if}
</li>
