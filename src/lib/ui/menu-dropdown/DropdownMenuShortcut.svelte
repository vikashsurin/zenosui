<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { DropdownShortcutProps } from '$lib/types/index.ts';

	let { children, class: _class, ...props }: DropdownShortcutProps = $props();
	let style = tv({
		base: `ml-auto opacity-40`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<span class={finalClass} {...props}>
	{@render children?.()}
</span>
