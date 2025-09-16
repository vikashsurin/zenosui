<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { TEXT_SIZE_WITH_HEIGHT, TEXT_SIZE_WITH_PADDING } from '$lib/style/sizing.js';
	import { setContext } from 'svelte';
	import type { TableContextType } from './types.ts';
	import type { HTMLTableAttributes } from 'svelte/elements';

	let { children, class: _class, ...props }: HTMLTableAttributes = $props();

	let style = tv({
		base: ` w-200 `,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<table class={finalClass} {...props}>
	{@render children?.()}
</table>
