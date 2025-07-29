<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { MeterProps } from '$lib/types/index.js';

	let { children, value, class: _class, ...props }: MeterProps = $props();

	let style = tv({
		base: `flex-1`,
		variants: {},
		compoundVariants: [{}],
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div class={finalClass} {...props}>
	{#if children}
		{@render children?.()}
	{/if}
</div>
