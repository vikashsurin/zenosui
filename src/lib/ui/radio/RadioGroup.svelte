<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { setContext } from 'svelte';
	import Radio from './Radio.svelte';
	import type { RadioContextType } from './types.ts';
	import type { UUID } from 'crypto';
	import type { RadioGroupProps } from '$lib/types/index.ts';

	let { children, uiSize, class: _class, ...props }: RadioGroupProps = $props();

	let radioState = $state({
		checkedId: <string | null>null,
		value: <string | number | null>null,
		uiSize: uiSize
	} as RadioContextType);

	setContext('radioContext', radioState);
	$inspect({ radioState });
	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div class={finalClass} {...props}>
	{@render children?.()}
</div>
