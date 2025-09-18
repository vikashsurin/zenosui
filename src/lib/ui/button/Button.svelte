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
	import { tv } from 'tailwind-variants';
	import { baseVariant, SIZE_PRESET, TEXT_SIZE } from '$lib/style/index.js';
	import type { ButtonProps } from '$lib/types/index.js';
	import clsx from 'clsx';
	import Icon from '../icon/Icon.svelte';
	import { theme } from '$lib/stores/theme.svelte.js';
	import { VARIANTS } from '$lib/style/variant.js';

	let {
		label = 'Button',
		href,
		ref = $bindable(),
		uiTheme = 'dark',
		themed = true,
		uiVariant = 'solid',
		uiSize = 'md',
		uiRounded = 'none',
		uiFill,
		uiBg = 'secondary',
		uiColor = 'primary',
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
		base: 'zu_button  inline-flex justify-center items-center',
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

	function buttonColor() {
		return uiColor;
	}

	function buttonVariant() {
		return uiVariant;
	}
	const finalClasses = $derived(
		buttonStyle({
			uiSize,
			uiBg,
			uiFill,
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
	data-themed={themed}
	bind:this={ref}
	class:button={themed}
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

<style>
	button {
		padding: 0.5em 0.75em;
		gap: 0.5em;
		outline-width: 0.1em;
	}
	button.primary {
		--button-color: var(--color-500);
	}

	button.danger {
		--button-color: var(--danger-500);
	}
	button.success {
		--button-color: var(--success-500);
	}
	button.warning {
		--button-color: var(--warning-500);
	}
	/* variants */
	button.solid {
		background-color: var(--button-color);
		color: white;
	}
	button.solid:hover {
		background-color: oklch(from var(--button-color) calc(l + 0.1) c h);
	}

	button.solid:active {
		background-color: oklch(from var(--button-color) calc(l - 0.1) c h);
	}

	/* variant filled */
	button.filled {
		background-color: oklch(from var(--button-color) l c h/ 0.1);
		color: var(--button-color);
	}
	button.filled:hover {
		background-color: oklch(from var(--button-color) l c h / 0.2);
		color: oklch(from var(--button-color) l calc(c + 0.05) h);
	}

	button.filled:active {
		background-color: oklch(from var(--button-color) l c h / 0.4);
		color: oklch(from var(--button-color) calc(l - 0.1) c h);
	}

	/* variant outlined */
	button.outlined {
		background-color: transparent;
		color: var(--button-color);
		border: 0.1em solid var(--button-color);
	}
	button.outlined:hover {
		background-color: transparent;
		color: oklch(from var(--button-color) calc(l + 0.1) c h);
		border: 0.1em solid oklch(from var(--button-color) calc(l + 0.1) c h);
	}
	button.outlined:active {
		background-color: transparent;
		color: oklch(from var(--button-color) calc(l - 0.1) c h);
		border: 0.1em solid oklch(from var(--button-color) calc(l - 0.1) c h);
	}

	/* variant dashed */
	button.dashed {
		background-color: transparent;
		color: var(--button-color);
		border: 0.1em dashed var(--button-color);
	}
	button.dashed:hover {
		background-color: transparent;
		color: oklch(from var(--button-color) calc(l + 0.1) c h);
		border: 0.1em dashed oklch(from var(--button-color) calc(l + 0.1) c h);
	}
	button.dashed:active {
		background-color: transparent;
		color: oklch(from var(--button-color) calc(l - 0.1) c h);
		border: 0.1em dashed oklch(from var(--button-color) calc(l - 0.1) c h);
	}

	/* variant ghost */
	button.ghost {
		background-color: transparent;
		color: var(--button-color);
	}

	button.ghost:hover {
		background-color: oklch(from var(--button-color) l c h / 0.1);
	}

	button.ghost:active {
		background-color: oklch(from var(--button-color) l c h / 0.27);
		color: oklch(from var(--button-color) calc(l - 0.1) c h);
	}

	/* variant link */
	button.link {
		background-color: transparent;
		color: var(--button-color);
	}

	button.link:hover {
		background-color: transparent;
		color: oklch(from var(--button-color) calc(l + 0.1) c h);
	}
	button.link:active {
		background-color: transparent;
		color: oklch(from var(--button-color) calc(l - 0.1) c h);
	}
</style>
