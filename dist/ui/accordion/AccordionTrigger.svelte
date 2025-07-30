<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button } from '../index.js';
	import { baseVariant } from '../../style/base.js';
	import Plus from '@lucide/svelte/icons/plus';
	import type { AccordionTriggerProps } from '../../types/index.js';
	import { getContext } from 'svelte';
	import type { AccordionItemStateType } from './types.js';
	let {
		children,
		iconLeft,
		iconRight = Plus,
		uiSize,
		uiRounded,
		class: _class
	}: AccordionTriggerProps = $props();

	const accordionItemState = getContext<AccordionItemStateType>('accordionItemState');

	let style = tv({
		extend: baseVariant,
		base: `w-full flex items-center justify-between gap-2`,
		variants: {},
		defaultVariants: {}
	});

	const finalClass = $derived(style({ class: clsx(_class) }));

	let rotation = '0';
	const setIconRotation = () => {
		if (rotation === '0') {
			rotation = '45';
		} else {
			rotation = '0';
		}
		console.log('rotation', rotation);
		return rotation;
	};
	function handleClick() {
		accordionItemState.expanded = !accordionItemState.expanded;
		accordionItemState.iconRotate = setIconRotation();
	}
</script>

<Button
	class={finalClass}
	{iconLeft}
	{iconRight}
	{uiSize}
	{uiRounded}
	uiIconRotate={accordionItemState.iconRotate}
	onclick={handleClick}
>
	{#if children}
		{@render children?.()}
	{/if}
</Button>
