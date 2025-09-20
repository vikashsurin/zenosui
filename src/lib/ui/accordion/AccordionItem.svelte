<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { AccordionItemProps } from '$lib/types/index.js';
	import { getContext, setContext } from 'svelte';
	import type { AccordionContextType, AccordionItemContextType } from './types.ts';

	let { children, uiSize, uiRounded, class: _class, ...props }: AccordionItemProps = $props();

	const context = getContext<AccordionContextType>('accordionContext');

	uiSize = uiSize ?? context.uiSize;
	uiRounded = uiRounded ?? context.uiRounded;
	const id = crypto.randomUUID();

	let state = $state({
		expanded: false,
		iconRightRotation: '0deg'
	});
	setContext('accordionItemContext', { state, uiSize, uiRounded } as AccordionItemContextType);

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
