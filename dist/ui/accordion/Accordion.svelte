<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { AccordionProps } from '../../types/index.js';
	import { setContext } from 'svelte';
	import type { AccordionContextType } from './types.js';

	let {
		children,
		uiSize = 'md',
		uiRounded = 'none',
		class: _class,
		...props
	}: AccordionProps = $props();

	setContext('accordionContext', { uiSize, uiRounded } as AccordionContextType);

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
