<script lang="ts">
	import './button.css';
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Icon } from '../index.js';
	import type { IconButtonProps } from '../../types/index.js';
	import { baseVariant, SIZE } from '../../style/index.js';
	import { btn_variants } from './button.style.js';

	let {
		icon,
		uiSize,
		themed = false,
		uiTheme = 'light',
		uiColor = 'gray',
		uiVariant = 'solid',
		uiRounded,
		class: _class,
		...props
	}: IconButtonProps = $props();

	const colorMap: { [key: string]: string } = {
		primary: 'var(--primary-surface-500',
		success: 'green',
		danger: 'red',
		warning: 'orange'
	};

	uiColor = colorMap[uiColor] ?? uiColor;

	let style = tv({
		extend: baseVariant,
		base: `zu_icon_button  bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700`,
		variants: {
			uiSize: SIZE,
			uiVariant: btn_variants
		},
		defaultVariants: {
			uiSize: 'md'
		}
	});
	const finalClass = $derived(
		style({ uiSize, uiRounded, uiVariant, class: clsx(_class, uiColor) })
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
