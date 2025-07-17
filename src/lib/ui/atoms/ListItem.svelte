<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { ListItemProps } from '$lib/types.js';
	import { Icon } from '$lib/ui/index.js';
	import { baseVariant, SIZE_PRESET } from '$lib/style/index.js';

	let {
		children,
		uiSize,
		uiRounded,
		label,
		iconLeft,
		iconRight,
		class: _class,
		...props
	}: ListItemProps = $props();

	let style = tv({
		extend: baseVariant,
		base: `list-none kala hover:bg-gray-300 inline-flex items-center bg-gray-200`,
		variants: {
			uiSize: SIZE_PRESET
		},
		defaultVariants: {
			uiSize: 'md',
			uiRounded: 'none'
		}
	});
	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class) }));
</script>

<li class={finalClass} {...props}>
	{#if iconLeft}
		<Icon {uiSize} icon={iconLeft} />
	{/if}
	{#if label}
		{label}
	{/if}
	{#if children}
		{@render children?.()}
	{/if}
	{#if iconRight}
		<Icon {uiSize} icon={iconRight} />
	{/if}
</li>
