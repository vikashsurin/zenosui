<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { HTMLTdAttributes } from 'svelte/elements';
	let { children, class: _class, ...props }: HTMLTdAttributes = $props();

	const paddingY = 'py-[0.5em]';
	const paddingX = 'px-[0.755em]';
	let style = tv({
		base: `text-inherit text-left  ${paddingY} ${paddingX}`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<td class={finalClass} {...props}>
	{@render children?.()}
</td>
