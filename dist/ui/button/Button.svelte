<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant, SIZE_PRESET } from '../../style/index.js';
	import type { ButtonProps } from '../../types/index.js';
	import clsx from 'clsx';
	import Icon from '../icon/Icon.svelte';

	let {
		label,
		href,
		ref = $bindable(),
		iconLeft,
		iconRight,
		uiIconRotate,
		uiSize,
		class: _class,
		uiBg,
		uiVariant,
		border,
		uiRounded,
		active,
		activeClass,
		children,
		...props
	}: ButtonProps = $props();

	activeClass = activeClass ?? 'bg-blue-500 text-white';

	const buttonStyle = tv({
		extend: baseVariant,
		base: 'inline-flex justify-center items-center ',
		variants: {
			uiSize: SIZE_PRESET,
			active: {
				true: '',
				false: ''
			}
		},
		compoundVariants: [
			{
				active: true,
				class: activeClass
			},
			{
				active: false,
				class: ''
			}
		],
		defaultVariants: {
			uiBg: 'secondary',
			uiVariant: 'filled',
			uiSize: 'md'
		}
	});

	const finalClasses = $derived(
		buttonStyle({
			uiSize,
			uiBg,
			uiVariant,
			uiRounded,
			border,
			active,
			class: clsx(_class)
		})
	);
	let as = href ? 'a' : 'button';
</script>

<svelte:element
	this={as}
	{href}
	bind:this={ref}
	role={href ? 'link' : 'button'}
	class={finalClasses}
	{...props}
>
	{#if iconLeft}
		<Icon {uiSize} icon={iconLeft} {uiIconRotate} />
	{/if}
	{#if label}
		<span id="btn-label">
			{label}
		</span>
	{/if}
	{#if children}
		{@render children?.()}
	{/if}
	{#if iconRight}
		<Icon {uiSize} icon={iconRight} {uiIconRotate} />
	{/if}
</svelte:element>
