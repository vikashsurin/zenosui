<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { TabBarProps } from '../../types/index.js';

	let { children, class: _class, ...props }: TabBarProps = $props();

	let style = tv({
		base: `flex`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div class={finalClass} {...props}>
	{@render children?.()}
</div>
