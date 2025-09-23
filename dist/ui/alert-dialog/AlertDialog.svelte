<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '../../style/index.js';
	import clsx from 'clsx';

	let { children, class: _class, ...props } = $props();

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

<dialog role="alertdialog" class={finalClasses} {...props}>
	{@render children()}
</dialog>
