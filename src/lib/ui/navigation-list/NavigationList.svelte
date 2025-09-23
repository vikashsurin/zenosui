<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { getContext, onMount, setContext } from 'svelte';
	import type { NavigationListProps } from '$lib/types/index.ts';
	import type { NavigationListContextType } from './types.ts';

	let { children, uiSize, class: _class, ...props }: NavigationListProps = $props();

	let state = $state({
		level: 0,
		currentTarget: null
	});
	const context = getContext<NavigationListContextType>('navigationListContext');

	uiSize = uiSize ?? context?.uiSize;

	let list: HTMLUListElement;
	setContext('navigationListContext', { uiSize } as NavigationListContextType);
	onMount(() => {
		if (list) {
			const parent = list.parentElement?.getAttribute('role');
			state.level = parent === 'treeitem' ? state.level + 1 : 0;
		}
	});

	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});

	function indent() {
		if (state.level > 0) {
			return 'sm';
		} else {
			return '';
		}
	}

	function defineRole() {
		if (state.level > 0) {
			return 'group';
		} else {
			return 'tree';
		}
	}

	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<ul bind:this={list} class={finalClass} {...props} role={defineRole()}>
	{@render children?.()}
</ul>
