<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import ListItem from '../atoms/ListItem.svelte';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import { Icon } from '../icon/index.ts';
	import { TEXT_SIZE_WITH_HEIGHT, TEXT_SIZE_WITH_PADDING } from '$lib/style/sizing.js';
	import { baseVariant } from '$lib/style/base.js';
	import Folder from '@lucide/svelte/icons/folder';
	import FolderOpen from '@lucide/svelte/icons/folder-open';
	import { getContext } from 'svelte';
	import { treeViewState } from './stateManager.svelte.ts';
	import type { TreeviewItemProps } from '$lib/types/index.ts';
	let {
		children,
		label,
		iconLeftOpen,
		iconLeftClose,
		iconRight,
		uiSize,
		class: _class,
		...props
	}: TreeviewItemProps = $props();

	let state = $state({
		isSelected: false,
		isExpanded: false
	});
	const id = crypto.randomUUID();
	let style = tv({
		extend: baseVariant,
		base: `flex gap-2 bg-gray-100 p-2 w-full hover:bg-gray-200`,
		variants: {
			uiSize: TEXT_SIZE_WITH_PADDING
		},
		defaultVariants: {}
	});

	let subtreeStyle = tv({
		base: ``,
		variants: {
			uiIndent: {
				xs: 'ml-2',
				sm: 'ml-4',
				md: 'ml-6',
				lg: 'ml-8',
				xl: 'ml-10',
				'2xl': 'ml-12'
			}
		},
		defaultVariants: {}
	});

	const isSelected = $derived.by(() => {
		return treeViewState.selectedId === 'treeitem-' + id;
	});

	$inspect({ isSelected });
	// const finalSubtreeStyle = $derived(subtreeStyle({ uiIndent: uiSize }));
	let iconLeft = $derived.by(() => {
		return state.isSelected ? (iconLeftOpen ?? FolderOpen) : (iconLeftClose ?? Folder);
	});

	const finalClass = $derived(style({ class: clsx(_class) }));

	function handleClick(e: MouseEvent) {
		e.stopPropagation();
		let currentTarget = e.currentTarget as HTMLElement;
		treeViewState.selectedId = currentTarget.id;

		if (children) {
			state.isExpanded = !state.isExpanded;
		}
	}
	// $inspect({ treeViewState });
	function handleKeyDown() {}
</script>

<li
	id="treeitem-{id}"
	class="border-left border-gray-500"
	role="treeitem"
	aria-selected={isSelected}
	aria-expanded={state.isExpanded}
	onkeydown={handleKeyDown}
	onclick={(e) => handleClick(e)}
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
		{#if children}
			{@render children?.()}
		{/if}
	{/if}
</li>

<style>
	li[aria-expanded='true'] {
		border-left: 1px solid gray;
		/* -- custom css variable */
	}
</style>
