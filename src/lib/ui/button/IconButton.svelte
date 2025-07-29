<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Icon } from '$lib/ui/index.js';
	import type { IconButtonProps } from '$lib/types/index.js';
	import { baseVariant, SIZE } from '$lib/style/index.js';

	let {
		icon,
		uiSize,
		uiColor,
		uiColorPreset,
		uiRounded,
		class: _class,
		...props
	}: IconButtonProps = $props();

	let style = tv({
		extend: baseVariant,
		base: `flex items-center justify-center`,
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

<button class={finalClass} {...props}>
	{#if icon !== null}
		<Icon {icon} uiIconSize={uiSize} />
	{/if}
</button>
