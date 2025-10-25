<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { AccordionContentProps } from '$lib/types/index.js';
	import { getContext } from 'svelte';
	import { baseVariant } from '$lib/style/base.js';
	import type { AccordionItemContextType } from './types.js';
	import { fade, slide } from 'svelte/transition';
	import { accordion_content_themes } from './style.js';
	import { TEXT_SIZE } from '$lib/style/sizing.js';

	let { children, uiTheme, uiSize, class: _class, ...props }: AccordionContentProps = $props();

	const context = getContext<AccordionItemContextType>('accordionItemContext');
	uiSize = uiSize ?? context.uiSize;
	uiTheme = uiTheme ?? context.uiTheme;

	let style = tv({
		extend: baseVariant,
		base: `p-4 `,
		variants: {
			uiSize: TEXT_SIZE
		},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));
</script>

{#if context.state.expanded}
	<div
		class={finalClass}
		class:accordion_content={true}
		{...props}
		in:slide={{ duration: 300 }}
		out:slide={{ duration: 300 }}
	>
		{@render children?.()}
	</div>
{/if}

<style>
	.accordion_content {
		background-color: oklch(from var(--theme-background) calc(l + 0.3) c h);
		color: var(--theme-foreground);
	}
</style>
