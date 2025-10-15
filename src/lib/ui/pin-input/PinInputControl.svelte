<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { PinInputControlProps } from '$lib/types/index.js';
	import { setContext } from 'svelte';
	import { TEXT_SIZE, TEXT_SIZE_WITH_DIMENSIONS } from '$lib/style/sizing.js';
	import { baseVariant } from '$lib/style/base.js';

	let {
		children,
		uiSize,
		onlyNumbers,
		uiRounded,
		class: _class,
		...props
	}: PinInputControlProps = $props();

	setContext('PinInputControlContext', { uiSize, uiRounded, onlyNumbers } as PinInputControlProps);

	let style = tv({
		extend: baseVariant,
		base: `flex gap-2`,
		variants: { uiSize: TEXT_SIZE },
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class) }));
</script>

<div role="group" class={finalClass} {...props}>
	{@render children?.()}
</div>
