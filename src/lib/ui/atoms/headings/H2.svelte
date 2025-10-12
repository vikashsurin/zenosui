<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { TEXT_SIZE } from '$lib/style/sizing.js';
	import type { HeadingProps } from '$lib/types/index.ts';

	let { children, uiSize, class: _class, ...props }: HeadingProps = $props();
	let style = tv({
		base: `text-[1.5em]`,
		variants: {
			uiSize: TEXT_SIZE
		},
		defaultVariants: {}
	});

	let finalClass = $derived(style({ uiSize, class: clsx(_class) }));
</script>

<h1 data-heading class={finalClass} {...props}>
	{@render children?.()}
</h1>
