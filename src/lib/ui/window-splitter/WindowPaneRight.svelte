<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { base } from '$app/paths';
	import { baseVariant } from '$lib/style/base.js';
	import type { WindowRightPaneProps } from '$lib/types/index.js';

	let { uiRounded, children, class: _class, ...props }: WindowRightPaneProps = $props();

	let style = tv({
		extend: baseVariant,
		base: `h-full overflow-auto bg-blue-400`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiRounded, class: clsx(_class) }));
</script>

<div class={finalClass} {...props}>
	{@render children?.()}
</div>
