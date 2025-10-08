<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button } from '../index.js';
	import type { ButtonProps } from '../../types/index.js';

	let {
		children,
		uiSize = 'md',
		uiRounded = 'xs',
		class: _class,
		...props
	}: ButtonProps = $props();

	let style = tv({
		base: `w-fit`,
		variants: {},
		defaultVariants: {
			uiSize: 'sm'
		}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));

</script>

<Button class={finalClass} {uiSize} {uiRounded} {...props}>
	{@render children?.()}
</Button>
