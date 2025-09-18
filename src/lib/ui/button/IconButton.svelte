<script lang="ts">
	import './button.css';
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Icon } from '$lib/ui/index.js';
	import type { IconButtonProps } from '$lib/types/index.js';
	import { baseVariant, SIZE } from '$lib/style/index.js';

	let {
		icon,
		uiSize,
		themed = false,
		uiTheme = 'dark',
		uiColor,
		uiVariant = 'solid',
		uiRounded,
		class: _class,
		...props
	}: IconButtonProps = $props();

	let style = tv({
		extend: baseVariant,
		base: `zu_icon_button  bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700`,
		variants: {
			uiSize: SIZE
		},
		defaultVariants: {
			uiSize: 'md'
		}
	});
	const finalClass = $derived(
		style({ uiSize, uiRounded, class: clsx(_class, uiColor, uiVariant) })
	);
</script>

<button
	data-themed={themed}
	style={`--custom-color: ${uiColor}`}
	class:btn={uiColor !== undefined}
	class={finalClass}
	{...props}
>
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
