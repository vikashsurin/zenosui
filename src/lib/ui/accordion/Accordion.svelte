<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { AccordionProps } from '$lib/types/index.js';
	import { setContext } from 'svelte';
	import type { AccordionItemStateType } from './types.js';

	let { children, class: _class, ...props }: AccordionProps = $props();

	let accordionState = $state({
		expanded: false
	} as AccordionItemStateType);

	setContext('accordionState', accordionState);

	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div class={finalClass} {...props}>
	{@render children?.()}
</div>
