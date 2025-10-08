<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant } from '../../style/base.js';
	import type { WindowLeftPaneProps } from '../../types/index.js';

	let { children, uiRounded, class: _class, ...props }: WindowLeftPaneProps = $props();

	let style = tv({
		extend: baseVariant,
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiRounded, class: clsx(_class) }));
</script>

<div class={finalClass} {...props}>
	{@render children?.()}
</div>
