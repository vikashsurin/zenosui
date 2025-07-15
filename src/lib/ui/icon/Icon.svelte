<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant, ICON_SIZE } from '$lib/style/index.js';
	import type { IconProps } from '$lib/types.js';

	let {
		icon,
		padding,
		uiSize,
		uiBg,
		uiColor,
		uiRounded,
		children,
		class: _class
	}: IconProps = $props();

	let style = tv({
		extend: baseVariant,
		base: ``,
		variants: {
			iconSize: ICON_SIZE
		},
		defaultVariants: {}
	});

	const finalClass = $derived(
		style({
			padding,
			uiBg,
			uiRounded,
			uiColor,
			iconSize: uiSize,
			class: clsx(_class)
		})
	);
</script>

<span class={finalClass}>
	{#if icon}
		{@const IconComponent = icon as Component}
		<IconComponent />
	{:else if children}
		{@render children()}
	{/if}
</span>
