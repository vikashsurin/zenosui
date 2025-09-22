<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Icon } from '../index.js';
	import { baseVariant } from '$lib/style/base.js';
	import Plus from '@lucide/svelte/icons/plus';
	import type { AccordionTriggerProps } from '$lib/types/index.js';
	import { getContext } from 'svelte';
	import type { AccordionItemContextType } from './types.js';
	import { TEXT_SIZE } from '$lib/style/sizing.js';
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

	const context = getContext<AccordionItemContextType>('accordionItemContext');
	uiSize = uiSize ?? context.uiSize;
	uiRounded = uiRounded ?? context.uiRounded;
	let style = tv({
		extend: baseVariant,
		base: `w-full flex items-center justify-between gap-2 bg-gray-200 hover:bg-gray-200 active:bg-gray-300 active:text-gray-600 py-[0.5em] px-[0.75em]`,
		variants: {
			uiSize: TEXT_SIZE
		},
		defaultVariants: {}
	});

	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class) }));

	const setIconRotation = () => {
		let rotation = '0';
		if (!context.state.expanded) {
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
		context.state.expanded = !context.state.expanded;
		context.state.iconRightRotation = setIconRotation();
	}
</script>

<button class={finalClass} onclick={handleClick}>
	{#if iconLeft}
		<Icon {uiSize} icon={iconLeft} iconRotation={iconLeftRotation} />
	{/if}
	{@render children?.()}

	{#if iconRight}
		<Icon {uiSize} icon={iconRight} class="ml-auto" />
	{/if}
</button>
