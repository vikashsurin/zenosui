<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button } from '$lib/ui/index.js';
	import type { ButtonProps } from '$lib/types.js';

	let { label, children, class: _class, ...props }: ButtonProps = $props();

	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<Button class={finalClass} {label} {...props}>
	{#if children}
		{@render children?.()}
	{/if}
</Button>
