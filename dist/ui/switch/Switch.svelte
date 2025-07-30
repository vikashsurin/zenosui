<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant } from '../../style/base.js';
	import { SIZE_FOR_SWITCH } from '../../style/sizing.js';
	import { BORDER, ROUNDED } from '../../style/borders.js';
	import type { SwitchProps } from '../../types/index.js';

	let {
		checked = $bindable(false),
		withBorder,
		uiSize,
		uiRounded,
		class: _class,
		...props
	}: SwitchProps = $props();

	let uiBorder = uiSize;
	let style = tv({
		extend: baseVariant,
		base: `bg-gray-300 border-4 box-content relative w-12 h-6 flex justify-start  duration-500 `,
		variants: {
			uiSize: SIZE_FOR_SWITCH,
			uiBorder: BORDER,
			checked: {
				true: ''
			},
			withBorder: {
				false: 'border-transparent',
				true: 'border-gray-900/20'
			}
		},
		compoundVariants: [
			{
				checked: true,
				class: 'bg-green-500'
			}
		],
		defaultVariants: {}
	});

	const switchClass = $derived(
		style({ checked, uiBorder, uiSize, withBorder, uiRounded, class: clsx(_class) })
	);

	let thumbStyle = tv({
		base: 'inline-block aspect-square h-full w-auto bg-white transition-all duration-200 ease-in-out shadow-sm',
		variants: {
			uiRounded: ROUNDED
		}
	});
</script>

<button class={switchClass} {...props} onclick={() => (checked = !checked)} {...props}>
	<span class={thumbStyle({ uiRounded })} style="transform: translateX({checked ? '100%' : '0%'})"
	></span>
</button>
