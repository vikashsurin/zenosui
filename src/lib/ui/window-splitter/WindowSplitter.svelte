<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { setContext } from 'svelte';
	import type { WindowSplitterContextType } from './types.js';
	import type { WindowSplitterProps } from '$lib/types/index.js';

	let {
		children,
		initialSplitPosition = 25,
		minLeftSplitPosition = 10,
		maxRightSplitPosition = 90,
		class: _class,
		...props
	}: WindowSplitterProps = $props();
	let containerElement = $state<HTMLDivElement | null>(null);

	let windwSplitState = $state({
		splitPosition: initialSplitPosition,
		minLeftSplitPosition,
		maxRightSplitPosition,
		containerElement: null as HTMLDivElement | null
	} as WindowSplitterContextType);

	setContext('windowSplitterContext', windwSplitState);

	$effect(() => {
		windwSplitState.containerElement = containerElement;
	});

	let style = tv({
		base: `grid h-screen`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div
	bind:this={containerElement}
	class={finalClass}
	{...props}
	style="grid-template-columns: {windwSplitState.splitPosition}% 4px 1fr;"
>
	{@render children?.()}
</div>
