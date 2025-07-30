<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { AlertFooterProps } from '../../types/index.js';

	let { children, class: _class, ...props }: AlertFooterProps = $props();

	let style = tv({
		base: `flex `,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<footer class={finalClass} {...props}>
	{#if children}
		{@render children?.()}
	{/if}
</footer>
