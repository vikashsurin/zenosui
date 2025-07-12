<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant, SIZE_PRESET } from '$lib/style/variant.js';
	import type { ButtonProps } from '$lib/types.js';
	import clsx from 'clsx';
	import Icon from '../icon/Icon.svelte';

	let {
		label,
		href,
		iconLeft,
		iconRight,
		sizeVariant,
		class: _class,
		backgroundColor,
		variant,
		border,
		roundedVariant,
		active,
		children,
		...props
	}: ButtonProps = $props();

	const buttonStyle = tv({
		extend: baseVariant,
		base: 'inline-flex justify-center items-center ',
		variants: {
			sizeVariant: SIZE_PRESET,
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
			backgroundColor: 'secondary',
			variant: 'filled',
			sizeVariant: 'md'
		}
	});

	const finalClasses = $derived(
		buttonStyle({
			sizeVariant,
			backgroundColor,
			variant,
			roundedVariant,
			border,
			active,
			class: clsx(_class)
		})
	);
	let as = href ? 'a' : 'button';
</script>

<svelte:element this={as} {href} role={href ? 'link' : 'button'} class={finalClasses} {...props}>
	{#if iconLeft}
		<Icon {sizeVariant} icon={iconLeft} />
	{/if}
	{#if label}
		{label}
	{/if}
	{#if children}
		{@render children?.()}
	{/if}
	{#if iconRight}
		<Icon {sizeVariant} icon={iconRight} />
	{/if}
</svelte:element>
