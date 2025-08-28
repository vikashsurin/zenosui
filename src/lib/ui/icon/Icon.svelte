<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant, ICON_SIZE } from '$lib/style/index.js';
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
		class: _class
	}: IconCompProps = $props();

	let style = tv({
		extend: baseVariant,
		base: ``,
		variants: {
			iconSize: ICON_SIZE
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
			uiColor,
			iconSize: uiSize || uiIconSize,
			class: clsx(_class)
		})
	);
</script>

<span class={finalClass} style={`transform:rotate(${rotation})`}>
	{#if icon}
		{@const IconComponent = icon as Component}
		<IconComponent />
	{:else if children}
		{@render children()}
	{/if}
</span>

<style>
	span {
		display: inline-block;
		width: auto;
		flex-shrink: 0;
	}
</style>
