<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '../../style/index.js';
	import clsx from 'clsx';
	import { Heading } from '../index.js';

	let { children, class: _class } = $props();

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

<Heading class={finalClasses}>
	{@render children()}
</Heading>
