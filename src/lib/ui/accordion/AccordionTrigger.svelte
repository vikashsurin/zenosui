<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button } from '../index.js';
	import { baseVariant } from '$lib/style/base.js';
	import Plus from '@lucide/svelte/icons/plus';
	import type { AccordionTriggerProps } from '$lib/types/index.js';
	import { getContext } from 'svelte';
	import type { AccordionItemStateType } from './types.js';
	let {
		children,
		uiSize,
		uiRounded,
		iconLeft,
		iconRight = Plus,
		iconLeftRotation,
		iconRightRotation,
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

	const setIconRotation = () => {
		let rotation = '0';
		if (!accordionItemState.expanded) {
			return rotation;
		}

		if (iconRightRotation === undefined || iconRightRotation === null) {
			rotation = '45';
		} else {
			rotation = iconRightRotation;
		}
		return rotation;
	};

	function handleClick() {
		accordionItemState.expanded = !accordionItemState.expanded;
		accordionItemState.iconRightRotation = setIconRotation();
	}
</script>

<Button
	class={finalClass}
	{iconLeft}
	{iconRight}
	{iconLeftRotation}
	{uiSize}
	{uiRounded}
	iconRightRotation={accordionItemState.iconRightRotation}
	onclick={handleClick}
>
	{#if children}
		{@render children?.()}
	{/if}
</Button>
