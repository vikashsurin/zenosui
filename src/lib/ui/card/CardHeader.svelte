<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { CardHeaderProps } from '$lib/types/index.js';

	let { children, class: _class, ...props }: CardHeaderProps = $props();

	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div class={finalClass} {...props}>{@render children?.()}</div>
