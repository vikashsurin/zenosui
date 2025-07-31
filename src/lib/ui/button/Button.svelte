<!-- 
@component

Button

**Props:**

- `label` (string): The main text.
- `iconLeft` (Component): Optional icon before label.
- `href` (string): Renders as link if provided.
- `activeClass` (string): Active state CSS class.
- `active` (boolean): Active state.
- `uiRounded, uiSize, class, ref, uiBg, uiVariant and so on`.

-->

<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant, SIZE_PRESET } from '$lib/style/index.js';
	import type { ButtonProps } from '$lib/types/index.js';
	import clsx from 'clsx';
	import Icon from '../icon/Icon.svelte';

	let {
		label = 'Button',
		href,
		ref = $bindable(),
		uiSize = 'md',
		uiRounded = 'none',
		uiVariant = 'filled',
		uiBg = 'secondary',
		iconLeft,
		iconRight,
		iconRotation,
		iconLeftRotation,
		iconRightRotation,
		active = false,
		activeClass,
		class: _class,
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
		]
	});

	const finalClasses = $derived(
		buttonStyle({
			uiSize,
			uiBg,
			uiVariant,
			uiRounded,
			active,
			class: clsx(_class)
		})
	);
	let as = href ? 'a' : 'button';
	let hrefProp = href ? { href } : {};
</script>

<svelte:element
	this={as}
	bind:this={ref}
	{...hrefProp}
	role={href ? 'link' : 'button'}
	class={finalClasses}
	{...props}
>
	{#if iconLeft}
		<Icon {uiSize} icon={iconLeft} iconRotation={iconLeftRotation} />
	{/if}
	{#if label}
		<span id="btn-label">
			{label}
		</span>
	{:else}
		{@render children?.()}
	{/if}
	{#if iconRight}
		<Icon {uiSize} icon={iconRight} iconRotation={iconRightRotation} />
	{/if}
</svelte:element>
