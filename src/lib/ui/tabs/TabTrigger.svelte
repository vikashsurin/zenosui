<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import Button from '../button/Button.svelte';
	import { getContext } from 'svelte';
	import type { TabTriggerProps } from '$lib/types/index.js';
	import type { TabContextType } from './types.js';

	let { children, active, id, activeClass, class: _class, ...props }: TabTriggerProps = $props();

	let tabState = getContext<TabContextType>('tabState');
	activeClass = activeClass ?? 'bg-gray-100 hover:bg-gray-200 text-gray-800';
	let style = tv({
		base: `box-border`,

		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<Button
	themed={false}
	active={tabState.openTabId === id}
	class={finalClass}
	{activeClass}
	onclick={() => (tabState.openTabId = id)}
	{...props}
>
	{#if children}
		{@render children?.()}
	{/if}
</Button>
