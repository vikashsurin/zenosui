<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button, Icon } from '$lib/ui/index.js';
	import type { ButtonProps, ChipProps } from '$lib/types/index.js';
	import { TEXT_SIZE } from '$lib/style/sizing.js';
	import { baseVariant } from '$lib/style/base.js';

	let {
		uiSize,
		label,
		uiRounded,
		iconLeft,
		iconRight,
		class: _class,
		...props
	}: ChipProps = $props();

	const paddingY = 'py-[0.5em]';
	const paddingX = 'px-[0.75em]';

	let style = tv({
		extend: baseVariant,
		base: ` flex bg-gray-200 text-gray-800 hover:text-gray-600 active:bg-gray-900 active:text-gray-100 ${paddingY} ${paddingX}`,
		variants: { uiSize: TEXT_SIZE },
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class) }));
</script>

<div role="button" class:chip={true} class={finalClass} {...props}>
	{#if iconLeft}
		<Icon {uiSize} icon={iconLeft} />
	{/if}
	{label}
	{#if iconRight}
		<Icon {uiSize} icon={iconRight} />
	{/if}
</div>

<style>
	.chip {
		display: flex;
		flex-shrink: 0;
		gap: 0.25em;
		align-items: center;
		justify-content: center;
		width: fit-content;
	}
</style>
