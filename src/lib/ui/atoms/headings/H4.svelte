<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { HeadingProps } from '$lib/types/index.ts';

	let style = tv({
		base: `text-[1em]`,
		variants: {},
		defaultVariants: {}
	});
	let { children, class: _class, ...props }: HeadingProps  = $props();

	let finalClass = $derived(style({ class: clsx(_class) }));
</script>

<h4 data-heading class={finalClass} {...props}>
	{@render children?.()}
</h4>
