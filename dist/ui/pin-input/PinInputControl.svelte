<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { PinInputControlProps } from '../../types/index.js';
	import { setContext } from 'svelte';
	import { TEXT_SIZE_WITH_DIMENSIONS } from '../../style/sizing.js';
	import { baseVariant } from '../../style/base.js';

	let { children, uiSize, uiRounded, class: _class, ...props }: PinInputControlProps = $props();

	setContext('PinInputControlContext', { uiSize, uiRounded });

	let style = tv({
		extend: baseVariant,
		base: `flex`,
		variants: { uiSize: TEXT_SIZE_WITH_DIMENSIONS },
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class) }));
</script>

<div role="group" class={finalClass} {...props}>
	{@render children?.()}
</div>
