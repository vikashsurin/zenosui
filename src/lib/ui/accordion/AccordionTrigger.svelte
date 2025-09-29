<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Icon } from '../index.js';
	import { baseVariant } from '$lib/style/base.js';
	import Plus from '@lucide/svelte/icons/plus';
	import type { AccordionTriggerProps } from '$lib/types/index.js';
	import { getContext } from 'svelte';
	import { accordion_trigger_themes } from './style.js';
	import type { AccordionItemContextType } from './types.js';
	import { TEXT_SIZE } from '$lib/style/sizing.js';
	let {
		children,
		uiTheme,
		uiSize,
		uiRounded,
		iconLeft,
		iconRight = Plus,
		iconLeftRotation,
		iconRightRotation = '45deg',
		iconRightOpen,
		iconRightClose,
		class: _class
	}: AccordionTriggerProps = $props();

	const context = getContext<AccordionItemContextType>('accordionItemContext');
	uiSize = uiSize ?? context.uiSize;
	uiRounded = uiRounded ?? context.uiRounded;
	uiTheme = context.uiTheme;
	let style = tv({
		extend: baseVariant,
		base: `w-full flex items-center justify-between gap-2 py-[0.5em] px-[0.75em] ${accordion_trigger_themes[uiTheme]}`,
		variants: {
			uiSize: TEXT_SIZE
		},
		defaultVariants: {}
	});

	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class) }));

	function handleClick() {
		context.state.expanded = !context.state.expanded;
	}
</script>

<button class={finalClass} onclick={handleClick}>
	{#if iconLeft}
		<Icon {uiSize} icon={iconLeft} iconRotation={iconLeftRotation} />
	{/if}
	{@render children?.()}

	{#if iconRight && iconRightOpen === undefined && iconRightClose === undefined}
		{@const icon = iconRight}
		<Icon
			{uiSize}
			{icon}
			iconRotation={context.state.expanded ? iconRightRotation : '0deg'}
			class="ml-auto"
		/>
	{:else if iconRightOpen || iconRightClose}
		{@const icon = context.state.expanded ? iconRightOpen : iconRightClose}
		<Icon {uiSize} {icon} class="ml-auto" />
	{/if}
</button>
