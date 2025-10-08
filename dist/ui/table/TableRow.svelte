<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { HTMLAttributes } from 'svelte/elements';
	let { children, class: _class, ...props }: HTMLAttributes<HTMLTableRowElement> = $props();

	let style = tv({
		base: `w-full border-b  border-gray-300 hover:bg-gray-200`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<tr class={finalClass} {...props}>
	{@render children?.()}
</tr>
