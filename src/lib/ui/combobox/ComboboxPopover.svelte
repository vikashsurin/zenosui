<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { getContext } from 'svelte';
	import type { ComboboxContextType } from './types.ts';
	import { baseVariant } from '$lib/style/base.js';
	import type { ComboboxPopoverProps } from '$lib/types/index.ts';

	let { children, uiRounded, class: _class, ...props }: ComboboxPopoverProps = $props();

	let style = tv({
		extend: baseVariant,
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const context = getContext<ComboboxContextType>('comboboxContext');
	const finalClass = $derived(style({ uiRounded, class: clsx(_class) }));
</script>

{#if context.state.isExpanded}
	<div class={finalClass} {...props}>
		{@render children?.()}
	</div>
{/if}
