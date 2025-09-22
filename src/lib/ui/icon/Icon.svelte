<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant, ICON_SIZE, TEXT_SIZE } from '$lib/style/index.js';
	import type { IconCompProps } from '$lib/types/index.js';
	import type { Component } from 'svelte';

	let {
		icon,
		uiBg,
		uiSize,
		uiColor,
		uiRounded,
		uiPadding,
		uiIconSize,
		iconRotation = '0deg',
		children,
		class: _class,
		...props
	}: IconCompProps = $props();

	let iconSize = uiSize || uiIconSize;
	let style = tv({
		extend: baseVariant,
		base: ``,
		variants: {
			iconSize: TEXT_SIZE
		},
		defaultVariants: {
			iconSize: 'md'
		}
	});

	let rotation = $derived.by(() => {
		if (iconRotation?.includes('deg')) {
			return iconRotation;
		} else {
			return iconRotation + 'deg';
		}
	});

	const finalClass = $derived(
		style({
			uiPadding,
			uiBg,
			uiRounded,
			iconSize,
			class: clsx(_class, 'icon')
		})
	);
</script>

{#if icon}
	{@const Icon = icon as Component}
	<Icon
		class={finalClass}
		style={`transform:rotate(${rotation}); height:1em;width:1em`}
		{...props}
	/>
{:else if children}
	{@render children()}
{/if}
