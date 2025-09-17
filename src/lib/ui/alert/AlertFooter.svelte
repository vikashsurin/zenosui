<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { AlertFooterProps } from '$lib/types/index.js';

	let { children, class: _class, ...props }: AlertFooterProps = $props();

	let style = tv({
		base: `flex `,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<footer class={finalClass} {...props}>
	{@render children?.()}
</footer>
