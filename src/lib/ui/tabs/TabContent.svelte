<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { getContext } from 'svelte';
	import type { TabContextType } from './types.js';
	import type { TabContentProps } from '$lib/types/index.js';

	let { children, id, class: _class, ...props }: TabContentProps = $props();
	let tabState = getContext<TabContextType>('tabState');

	let style = tv({
		base: `inline-block p-2 bg-gray-100 w-full h-full`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

{#if tabState.openTabId === id}
	<div class={finalClass} {...props}>
		{@render children?.()}
	</div>
{/if}
