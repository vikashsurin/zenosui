<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { DialogFooterProps } from '$lib/types/index.js';

	let { children, class: _class, ...props }: DialogFooterProps = $props();

	let style = tv({
		base: `flex items-center justify-end gap-2 `,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<footer class={finalClass} {...props}>
	{@render children?.()}
</footer>
