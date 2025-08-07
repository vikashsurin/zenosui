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

<button data-themed={themed} class={finalClass} {...props}>
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

	/* .zu_icon_button[data-themed='true'] {
		background-color: var(--primary-surface-base);
		color: var(--primary-content);
	}
	.zu_icon_button[data-themed='true']:hover {
		background-color: var(--primary-surface-hover);
		color: var(--primary-content);
	}
	.zu_icon_button[data-themed='true']:active {
		background-color: var(--primary-surface-active);
		color: var(--primary-content);
	} */
</style>
