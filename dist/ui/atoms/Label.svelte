<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '../../style/index.js';
	import clsx from 'clsx';
	import type { LabelProps } from '../../types/index.js';

	let {
		children,
		...props
	}: LabelProps = $props();

	const style = tv({
		extend: baseVariant,
		base: 'inline-flex justify-center items-center ',
		variants: {},
		compoundVariants: [],
		defaultVariants: {}
	});

	const finalClasses = $derived(
		style({
			class: clsx(_class)
		})
	);
</script>
<label class={finalClasses} {...props}>
	{#if children}
		{@render children()}
	{/if}
</label>