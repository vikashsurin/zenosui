<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { AccordionProps } from '../../types/index.js';
	import { setContext } from 'svelte';
	import type { AccordionStateType } from './types.js';

	let { children, class: _class, ...props }: AccordionProps = $props();

	let accordionState = $state({
		expanded: false
	} as AccordionStateType);

	setContext('accordionState', accordionState);

	let style = tv({
		base: ``,
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
