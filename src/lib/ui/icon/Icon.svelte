<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant, ICON_SIZE } from '$lib/style/index.js';
	import type { IconProps } from '$lib/types/index.js';

	let {
		icon,
		padding,
		uiSize,
		uiIconSize,
		uiIconRotate,
		uiBg,
		uiColor,
		uiRounded,
		children,
		class: _class
	}: IconProps = $props();

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

	let iconRotate = $derived(`transform:rotate(${uiIconRotate}deg)`);
	let finalStyle = $derived(iconRotate);
	const finalClass = $derived(
		style({
			padding,
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
