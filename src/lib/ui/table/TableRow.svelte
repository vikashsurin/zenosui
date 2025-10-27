<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { HTMLAttributes } from 'svelte/elements';
	import { tableRowTheme } from './theme.js';
	let { children, class: _class, ...props }: HTMLAttributes<HTMLTableRowElement> = $props();

	let style = tv({
		base: `w-full border-b  ${tableRowTheme} `,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<tr class={finalClass} {...props}>
	{@render children?.()}
</tr>
