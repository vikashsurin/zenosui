<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button } from '../index.js';
	import type { ButtonProps } from '$lib/types.js';

	let {
		children,
		sizeVariant = 'md',
		roundedVariant = 'xs',
		class: _class,
		...props
	}: ButtonProps = $props();

	let style = tv({
		base: `w-fit`,
		variants: {},
		defaultVariants: {
			sizeVariant: 'sm'
		}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));

</script>

<Button class={finalClass} {sizeVariant} {roundedVariant} {...props}>
	{#if children}
		{@render children?.()}
	{/if}
</Button>
