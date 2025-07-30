<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { setContext } from 'svelte';
	import type { SelectContextType } from './types.js';
	import type { SelectProps } from '../../types/index.js';

	let { children, uiSize, uiRounded, class: _class }: SelectProps = $props();

	let selectContext = $state({
		uiSize: uiSize ?? 'md',
		uiRounded: uiRounded ?? 'md',
		open: false,
		value: null
	});

	setContext('selectContext', selectContext as SelectContextType);

	let style = tv({
		base: `inline-block w-max relative`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div class={finalClass}>
	{#if children}
		{@render children?.()}
	{/if}
</div>
