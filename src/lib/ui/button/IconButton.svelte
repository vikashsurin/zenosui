<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Icon } from '$lib/ui/index.js';
	import type { IconButtonProps } from '$lib/types/index.js';
	import { baseVariant, SIZE } from '$lib/style/index.js';

	let {
		icon,
		uiSize,
		themed = true,
		uiColor,
		uiColorPreset,
		uiRounded,
		class: _class,
		...props
	}: IconButtonProps = $props();

	let style = tv({
		extend: baseVariant,
		base: `zu_icon_button interactive`,
		variants: {
			uiSize: SIZE
		},
		defaultVariants: {
			uiSize: 'md',
			uiColorPreset: 'secondary'
		}
	});
	const finalClass = $derived(
		style({ uiSize, uiColor, uiRounded, uiColorPreset, class: clsx(_class) })
	);
</script>

<button data-themed={themed} class:button={themed} class={finalClass} {...props}>
	{#if icon !== null}
		<Icon {icon} uiIconSize={uiSize} />
	{/if}
</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
</style>
