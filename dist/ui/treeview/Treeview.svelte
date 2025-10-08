<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { getContext, onMount, setContext } from 'svelte';
	import type { TreeViewProps } from '../../types/index.js';
	import type { TreeviewContextType } from './types.js';

	let { children, uiIndent, uiSize, class: _class, ...props }: TreeViewProps = $props();

	let state = $state({
		level: 0,
		currentTarget: null
	});
	const context = getContext<TreeviewContextType>('treeviewContext');

	uiSize = uiSize ?? context.uiSize;

	let ultree: HTMLUListElement;
	setContext('treeviewContext', { uiSize } as TreeviewContextType);
	onMount(() => {
		if (ultree) {
			const parent = ultree.parentElement?.getAttribute('role');
			state.level = parent === 'treeitem' ? state.level + 1 : 0;
		}
	});

	let style = tv({
		base: ``,
		variants: {
			uiIndent: {
				xs: 'ml-2',
				sm: 'ml-4',
				md: 'ml-8',
				lg: 'ml-12',
				xl: 'ml-16',
				'2xl': 'ml-20',
				'3xl': 'ml-24',
				'4xl': 'ml-28',
				'5xl': 'ml-32',
				'6xl': 'ml-36',
				'7xl': 'ml-40',
				'8xl': 'ml-44'
			}
		},
		defaultVariants: {}
	});

	function indent() {
		if (state.level > 0) {
			return 'sm';
		} else {
			return '';
		}
	}

	const finalClass = $derived(style({ uiIndent: uiIndent ?? indent(), class: clsx(_class) }));
</script>

<ul bind:this={ultree} class={finalClass} {...props} role={'tree'}>
	{@render children?.()}
</ul>
