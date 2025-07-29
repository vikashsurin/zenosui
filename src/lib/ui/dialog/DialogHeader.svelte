<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { DialogHeaderProps } from '$lib/types/index.js';

	let { children, class: _class, ...props }: DialogHeaderProps = $props();

	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<header class={finalClass} {...props}>
	{#if children}
		{@render children?.()}
	{/if}
</header>
