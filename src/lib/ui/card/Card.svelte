<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { CardProps } from '$lib/types/index.ts';

	let { children, class: _class, ...props }: CardProps = $props();

	let style = tv({
		base: `bg-gray-50 border flex flex-col justify-between items-center border-gray-300 w-[400px] p-2 rounded-lg shadow-md aspect-square`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div class={finalClass} {...props}>
	{@render children?.()}
</div>
