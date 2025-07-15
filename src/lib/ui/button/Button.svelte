<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant, SIZE_PRESET } from '$lib/style/index.js';
	import type { ButtonProps } from '$lib/types.js';
	import clsx from 'clsx';
	import Icon from '../icon/Icon.svelte';

	let {
		label,
		href,
		iconLeft,
		iconRight,
		uiSize,
		class: _class,
		uiBg,
		uiVariant,
		border,
		uiRounded,
		active,
		children,
		...props
	}: ButtonProps = $props();

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
				class: 'bg-blue-500 text-white'
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

<svelte:element this={as} {href} role={href ? 'link' : 'button'} class={finalClasses} {...props}>
	{#if iconLeft}
		<Icon {uiSize} icon={iconLeft} />
	{/if}
	{#if label}
		{label}
	{/if}
	{#if children}
		{@render children?.()}
	{/if}
	{#if iconRight}
		<Icon {uiSize} icon={iconRight} />
	{/if}
</svelte:element>
