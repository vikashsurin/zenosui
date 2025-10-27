<!-- 
@component

Button

**Props:**

- `label` (string): The main text.
- `iconLeft` (Component): Optional icon before label.
- `href` (string): Renders as link if provided.
- `activeClass` (string): Active state CSS class.
- `active` (boolean): Active state.
- `uiRounded, uiSize, class, ref, uiBg, uiFill and so on`.

-->

<script lang="ts">
	import './button.css';
	import { tv } from 'tailwind-variants';
	import { baseVariant, TEXT_SIZE } from '$lib/style/index.js';
	import { base, btn_variants } from './button.style.js';
	import type { ButtonProps, ColorVariant } from '$lib/types/index.js';
	import clsx from 'clsx';
	import Icon from '../icon/Icon.svelte';
	import './button.css';

	let {
		label = 'Button',
		href,
		ref = $bindable(),
		themed = false,
		uiColor = 'primary',
		uiVariant = 'solid',
		uiSize = 'md',
		uiRounded = 'none',
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

	activeClass = activeClass ?? 'bg-amber-500';

	const colorMap: { [key: string]: string } = {
		primary: 'var(--brand)',
		secondary: 'gray',
		success: 'green',
		danger: 'red',
		warning: 'orange'
	};

	uiColor = colorMap[uiColor] ?? uiColor;

	const buttonStyle = tv({
		extend: baseVariant,
		base: `${base} ${uiVariant}  h-max w-max`,
		variants: {
			uiSize: TEXT_SIZE,
			uiVariant: btn_variants,
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
			uiRounded,
			uiVariant,
			active,
			class: clsx(_class, uiColor)
		})
	);
	let as = href ? 'a' : 'button';
	let hrefProp = href ? { href } : {};
</script>

<svelte:element
	this={as}
	data-custom-color={uiColor}
	bind:this={ref}
	data-themed={themed}
	role={href ? 'link' : 'button'}
	class={finalClasses}
	style={`--custom-color: ${uiColor}`}
	{...hrefProp}
	{...props}
>
	{#if iconLeft}
		<Icon {uiSize} icon={iconLeft} iconRotation={iconLeftRotation} />
	{/if}
	{#if children}
		{@render children?.()}
	{:else if label}
		<span id="btn-label">
			{label}
		</span>
	{/if}
	{#if iconRight}
		<Icon {uiSize} icon={iconRight} iconRotation={iconRightRotation} />
	{/if}
</svelte:element>
