<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { HTMLAttributes } from 'svelte/elements';

	let { children, class: _class, ...props }: HTMLAttributes<HTMLElement> = $props();

	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<caption class={finalClass} {...props}>
	{@render children?.()}
</caption>
