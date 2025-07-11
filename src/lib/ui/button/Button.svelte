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
		size,
		class: _class,
		colorVariant,
		variant,
		rounded,
		active,
		children,
		...props
	}: ButtonProps = $props();

	const buttonStyle = tv({
		extend: baseVariant,
		base: 'inline-flex justify-center items-center ',
		variants: {
			size: SIZE_PRESET,
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
			colorVariant: 'secondary',
			variant: 'outline',
			size: 'md'
		}
	});

	const finalClasses = $derived(
		buttonStyle({
			size,
			colorVariant,
			variant,
			rounded,
			active,
			class: clsx(_class)
		})
	);
	let as = href ? 'a' : 'button';
</script>

<svelte:element this={as} {href} role={href ? 'link' : 'button'} class={finalClasses} {...props}>
	{#if iconLeft}
		<Icon {size} icon={iconLeft} />
	{/if}
	{#if label}
		{label}
	{/if}
	{#if children}
		{@render children?.()}
	{/if}
	{#if iconRight}
		<Icon {size} icon={iconRight} />
	{/if}
</svelte:element>
