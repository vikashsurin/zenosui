<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { setContext } from 'svelte';
	import type { TabContextType } from './types.js';
	import type { TabsProps } from '$lib/types/index.js';

	let { children, class: _class, ...props }: TabsProps = $props();

	let tabState = $state({
		openTabId: 'tab1'
	});

	setContext('tabState', tabState as TabContextType);

	let style = tv({
		base: `zu_tabs`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div class={finalClass} {...props}>
	{#if children}
		{@render children?.()}
	{/if}
</div>

<style>
	.zu_tabs {
		/* display: flex; */
	}
</style>
