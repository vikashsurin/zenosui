<script lang="ts">
	import { tv } from 'tailwind-variants';
	import {
		baseVariant,
		type RoundedVariant,
		type SizeVariant,
		type TextSizeVariant
	} from '../../style/index.js';
	import clsx from 'clsx';
	import type { NavigationMenuItemProps } from '../../types/index.js';
	import { getContext } from 'svelte';
	import { Icon } from '../index.js';

	let {
		uiRounded,
		iconLeft,
		iconRight,
		uiIconSize,
		uiText,
		children,
		class: _class,
		...props
	}: NavigationMenuItemProps = $props();

	const context = getContext<{
		uiRounded: RoundedVariant;
		uiText: TextSizeVariant;
		uiIconSize?: SizeVariant;
	}>('navigationMenuContext');
	uiRounded = uiRounded ?? context.uiRounded;
	uiText = uiText ?? context.uiText;
	uiIconSize = uiIconSize ?? context.uiText ?? context.uiIconSize;

	const style = tv({
		extend: baseVariant,
		base: 'inline-block p-1',
		variants: {},
		compoundVariants: [],
		defaultVariants: {}
	});

	const finalClasses = $derived(
		style({
			uiRounded,
			uiText,
			class: clsx(_class)
		})
	);
</script>

<li>
	<a href={props.href} class={finalClasses} {...props}>
		{#if iconLeft}
			<Icon icon={iconLeft} uiSize={uiIconSize} />
		{/if}

		{#if children}
			{@render children?.()}
		{/if}
		{#if iconRight}
			<Icon icon={iconRight} uiSize={uiIconSize} class="ml-auto" />
		{/if}
	</a>
</li>
