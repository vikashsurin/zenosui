<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button } from '../index.js';
	import type { ButtonProps } from '$lib/types.js';
	import { getContext } from 'svelte';

	let {
		children,
		sizeVariant = 'md',
		roundedVariant = 'xs',
		class: _class,
		...props
	}: ButtonProps = $props();

	let style = tv({
		base: `ml-auto w-fit`,
		variants: {},
		defaultVariants: {
			sizeVariant: 'sm'
		}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));

	const dialogCtx = getContext<{ close: () => void }>('dialogCtx');
	function handleClick() {
		dialogCtx.close();
	}
</script>

<Button class={finalClass} {sizeVariant} {roundedVariant} onclick={handleClick} {...props}>
	{#if children}
		{@render children?.()}
	{/if}
</Button>
