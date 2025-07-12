<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { type Component } from 'svelte';
	import clsx from 'clsx';
	import { baseVariant, ICON_SIZE } from '$lib/style/variant.js';
	import type { IconProps } from '$lib/types.js';

	let {
		icon,
		padding,
		sizeVariant,
		backgroundColor,
		contentColor,
		roundedVariant,
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
			backgroundColor,
			roundedVariant,
			contentColor,
			iconSize: sizeVariant,
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
