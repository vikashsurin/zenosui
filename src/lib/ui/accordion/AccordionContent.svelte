<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { AccordionContentProps } from '$lib/types/index.js';
	import { getContext } from 'svelte';
	import { baseVariant } from '$lib/style/base.js';
	import type { AccordionItemStateType } from './types.js';
	import { fade, slide } from 'svelte/transition';

	let { children, class: _class, ...props }: AccordionContentProps = $props();

	const accordionItemState = getContext<AccordionItemStateType>('accordionItemState');

	let style = tv({
		extend: baseVariant,
		base: `p-4 bg-gray-100`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

{#if accordionItemState.expanded}
	<div class={finalClass} {...props} in:slide={{ duration: 300 }} out:slide={{ duration: 300 }}>
		{#if children}
			{@render children?.()}
		{/if}
	</div>
{/if}
