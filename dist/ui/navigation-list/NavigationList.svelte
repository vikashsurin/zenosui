<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { getContext, onMount, setContext } from 'svelte';
	import type { NavigationListProps } from '../../types/index.ts';
	import type { NavigationListContextType } from './types.ts';

	let { children, uiSize, class: _class, ...props }: NavigationListProps = $props();

	let state = $state({
		level: 0,
		currentTarget: null
	});
	const context = getContext<NavigationListContextType>('navigationListContext');

	uiSize = uiSize ?? context?.uiSize;

	let ultree: HTMLUListElement;
	setContext('navigationListContext', { uiSize } as NavigationListContextType);
	onMount(() => {
		if (ultree) {
			const parent = ultree.parentElement?.getAttribute('role');
			state.level = parent === 'listitem' ? state.level + 1 : 0;
		}
	});

	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});

	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<ul bind:this={ultree} class={finalClass} {...props} role={'list'}>
	{@render children?.()}
</ul>
