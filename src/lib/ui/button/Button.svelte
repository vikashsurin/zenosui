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
	import { baseVariant, SIZE_PRESET, TEXT_SIZE } from '$lib/style/index.js';
	import type { ButtonProps } from '$lib/types/index.js';
	import clsx from 'clsx';
	import Icon from '../icon/Icon.svelte';

	let {
		label = 'Button',
		href,
		ref = $bindable(),
		uiTheme = 'dark',
		themed = false,
		uiVariant = 'solid',
		uiSize = 'md',
		uiRounded = 'none',
		uiColor,
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
		base: 'zu_button  inline-flex justify-center items-center bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700',
		variants: {
			uiSize: TEXT_SIZE,
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
			active,
			class: clsx(_class, uiColor, uiVariant)
		})
	);
	let as = href ? 'a' : 'button';
	let hrefProp = href ? { href } : {};
</script>

<svelte:element
	this={as}
	bind:this={ref}
	data-themed={themed}
	class:btn={uiColor !== undefined}
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

<style>
	button,
	a {
		padding: 0.5em 0.75em;
		gap: 0.5em;
	}
</style>
