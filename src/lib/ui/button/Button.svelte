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
	import { btn_themes, base, btn_variants } from './button.style.js';
	import type { ButtonProps, ColorVariant } from '$lib/types/index.js';
	import clsx from 'clsx';
	import Icon from '../icon/Icon.svelte';

	let {
		label = 'Button',
		href,
		ref = $bindable(),
		uiTheme = 'light',
		themed = false,
		uiVariant = 'solid',
		uiSize = 'md',
		uiRounded = 'none',
		uiColor = 'gray',
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

	const colorMap: { [key: string]: string } = {
		primary: 'var(--primary-surface-500',
		success: 'green',
		danger: 'red',
		warning: 'orange'
	};

	uiColor = colorMap[uiColor] ?? uiColor;

	const buttonStyle = tv({
		extend: baseVariant,
		base: `button ${base} ${btn_themes[uiTheme]} h-max w-max`,
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
