<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { CardProps } from '$lib/types/index.js';

	let { children, themed, class: _class, ...props }: CardProps = $props();

	let style = tv({
		base: `bg-[var(--theme-background)] text-[var(--theme-foreground)] border flex flex-col  border-gray-300 w-[400px]  rounded-lg shadow-md aspect-square`,
		variants: {},
		defaultVariants: {}
	});

	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div class:card={true} class={finalClass} {...props}>
	{@render children?.()}
</div>
