<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { AccordionItemProps } from '$lib/types/index.js';
	import { setContext } from 'svelte';

	let { children, class: _class, ...props }: AccordionItemProps = $props();

	const id = crypto.randomUUID();

	let accordionItemState = $state({
		expanded: false,
		iconRightRotation: '0deg'
	});
	setContext('accordionItemState', accordionItemState);

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
