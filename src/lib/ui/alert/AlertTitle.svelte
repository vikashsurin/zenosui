<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { TEXT_SIZE } from '$lib/style/variant.js';
	import type { AlertTitleProps } from '$lib/types.js';

	let { children, class: _class, ...props }: AlertTitleProps = $props();

	let style = tv({
		base: `zu_alert_title inline-flex  items-center `,
		variants: {
			sizeVariant: TEXT_SIZE
		},
		defaultVariants: {
			sizeVariant: 'xl'
		}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<h2 class={finalClass} {...props}>
	{#if children}
		{@render children?.()}
	{/if}
</h2>
