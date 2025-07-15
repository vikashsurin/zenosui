<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { ListItemProps } from '$lib/types.js';

	let { children, class: _class, ...props }: ListItemProps = $props();

	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<li class={finalClass} {...props}>
	{#if children}
		{@render children?.()}
	{/if}
</li>
