<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant, ICON_SIZE } from '../../style/index.js';
	import type { IconCompProps } from '../../types/index.js';
	import type { Component } from 'svelte';

	let {
		icon,
		uiBg,
		uiSize,
		uiColor,
		uiRounded,
		uiPadding,
		uiIconSize,
		iconRotation,
		children,
		class: _class
	}: IconCompProps = $props();

	let style = tv({
		extend: baseVariant,
		base: `inline-block w-fit`,
		variants: {
			iconSize: ICON_SIZE
		},
		defaultVariants: {
			iconSize: 'md'
		}
	});

	let iconRotate = $derived(`transform:rotate(${iconRotation}deg)`);
	let finalStyle = $derived(iconRotate);
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

<span class={finalClass} style={finalStyle}>
	{#if icon}
		{@const IconComponent = icon as Component}
		<IconComponent />
	{:else if children}
		{@render children()}
	{/if}
</span>
