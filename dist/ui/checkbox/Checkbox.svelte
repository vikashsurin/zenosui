<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant } from '../../style/base.js';
	import type { CheckboxProps } from '../../types/index.js';

	let { children, class: _class, ...props }: CheckboxProps = $props();

	let style = tv({
		extend: baseVariant,
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<input type="checkbox" class={finalClass} {...props} />
