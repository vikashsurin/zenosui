<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant } from '$lib/style/base.js';
	import { SIZE, SIZE_FOR_SWITCH } from '$lib/style/sizing.js';
	import { BORDER, ROUNDED } from '$lib/style/borders.js';
	import type { SwitchProps } from '$lib/types/index.js';

	let {
		checked = $bindable(false),
		withBorder,
		uiSize,
		uiRounded,
		class: _class,
		themed = true,
		activeClass,
		...props
	}: SwitchProps = $props();

	let uiBorder = uiSize;

	let style = tv({
		extend: baseVariant,
		base: `zu_switch bg-gray-300 border-4 box-content relative w-12 h-6 flex justify-start  duration-500 `,
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
				class: activeClass
			}
		],
		defaultVariants: {
			uiSize: 'md'
		}
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

<label data-themed={themed} class={switchClass} class:interactive={checked}>
	<input type="checkbox" role="switch" aria-checked={checked} class="sr" bind:checked />
	<span class={thumbStyle({ uiRounded })} style="transform: translateX({checked ? '100%' : '0%'})"
	></span>
</label>

<style>
	.sr {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		border: 1px solid black;
		/* clip: rect(0, 0, 0, 0); */
		white-space: nowrap;
		border-width: 0;
	}
</style>
