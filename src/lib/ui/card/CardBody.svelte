<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { CardBodyProps } from '$lib/types/index.js';

	let { children, themed, class: _class, ...props }: CardBodyProps = $props();

	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div
	data-themed={themed}
	data-theme="custom"
	class:card-body--themed={themed}
	class={finalClass}
	{...props}
>
	{@render children?.()}
</div>
