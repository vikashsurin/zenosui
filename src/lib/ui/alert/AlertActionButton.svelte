<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import Button from '../button/Button.svelte';
	import type { ButtonProps } from '$lib/types/index.js';
	import { getContext } from 'svelte';

	let {
		children,
		uiSize = 'sm',
		uiRounded = 'sm',
		class: _class,
		...props
	}: ButtonProps = $props();

	const alertCtx = getContext<{ close: () => void }>('alertCtx');
	function handleClick() {
		alertCtx.close();
	}
	let style = tv({
		base: `ml-auto`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<Button {uiSize} {uiRounded} class={finalClass} {...props} onclick={handleClick}>
	{#if children}
		{@render children?.()}
	{/if}
</Button>
