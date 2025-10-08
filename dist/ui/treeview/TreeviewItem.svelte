<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Icon } from '../icon/index.js';
	import { TEXT_SIZE } from '../../style/sizing.js';
	import { baseVariant } from '../../style/base.js';
	import Folder from '@lucide/svelte/icons/folder';
	import FolderOpen from '@lucide/svelte/icons/folder-open';
	import { getContext } from 'svelte';
	import { treeViewState } from './stateManager.svelte.js';
	import type { TreeviewItemProps } from '../../types/index.js';
	import type { TreeviewContextType } from './types.js';
	let {
		children,
		label,
		iconLeftOpen,
		iconLeftClose,
		iconRightOpen,
		iconRightClose,
		uiSize,
		class: _class,
		...props
	}: TreeviewItemProps = $props();

	const context = getContext<TreeviewContextType>('treeviewContext');
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
		return treeViewState.selectedId === 'treeitem-' + id;
	});

	let iconLeft = $derived.by(() => {
		return state.isExpanded ? (iconLeftOpen ?? FolderOpen) : (iconLeftClose ?? Folder);
	});

	let iconRight = $derived.by(() => {
		return state.isExpanded ? iconRightOpen : iconRightClose;
	});

	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));

	function handleClick(e: MouseEvent) {
		e.stopPropagation();
		let currentTarget = e.currentTarget as HTMLElement;
		treeViewState.selectedId = currentTarget.id;

		if (children) {
			state.isExpanded = !state.isExpanded;
		}
	}
	function handleKeyDown() {}
</script>

<li
	id="treeitem-{id}"
	class=" border-gray-300 aria-[expanded=true]:border-l"
	role={children ? 'group' : 'treeitem'}
	aria-selected={isSelected}
	aria-expanded={state.isExpanded}
	onkeydown={handleKeyDown}
	onclick={(e) => handleClick(e)}
	{...props}
>
	<span class={finalClass}>
		{#if iconLeft}
			<Icon {uiSize} icon={iconLeft} />
		{/if}
		<span>{label ?? 'Item'}</span>
		{#if iconRight}
			<Icon {uiSize} icon={iconRight} class="ml-auto" />
		{/if}
	</span>
	{#if state.isExpanded}
		{@render children?.()}
	{/if}
</li>
