<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { TEXT_SIZE_WITH_PADDING } from '../../style/sizing.js';
	import { ROUNDED } from '../../style/borders.js';
	import { fly } from 'svelte/transition';
	import type { TooltipPopupProps } from '../../types/index.js';

	let {
		children,
		uiRounded,
		uiSize,
		content = 'this is a tooltip and this is long',
		class: _class
	}: TooltipPopupProps = $props();

	let marginBottom = $derived(uiSize);

	let style = tv({
		base: `shadow-md bg-white `,
		variants: {
			uiRounded: ROUNDED,
			marginBottom: {
				xs: 'mb-2.5',
				sm: 'mb-3.5',
				md: 'mb-4.5',
				lg: 'mb-5.5',
				xl: 'mb-6.5',
				'2xl': 'mb-7.5',
				'3xl': 'mb-8',
				'4xl': 'mb-8.5',
				'5xl': 'mb-9',
				'6xl': 'mb-10',
				'7xl': 'mb-12',
				'8xl': 'mb-16'
			}
		},
		defaultVariants: {
			marginBottom: 'sm'
		}
	});
	const finalClass = $derived(style({ uiRounded, marginBottom, class: clsx(_class) }));

	let tooltipCont = tv({
		base: '',
		variants: {
			uiRounded: ROUNDED,
			uiSize: TEXT_SIZE_WITH_PADDING
		},
		defaultVariants: {
			uiSize: 'sm',
			uiRounded: 'sm'
		}
	});

	let tooltipTipStyle = tv({
		base: '',
		variants: {
			uiSize: {
				xs: 'w-3 h-3',
				sm: 'w-4 h-4',
				md: 'w-5 h-5',
				lg: 'w-6 h-6',
				xl: 'w-7 h-7',
				'2xl': 'w-8 h-8',
				'3xl': 'w-9 h-9',
				'4xl': 'w-10 h-10',
				'5xl': 'w-11 h-11',
				'6xl': 'w-12 h-12',
				'7xl': 'w-14 h-14',
				'8xl': 'w-16 h-16'
			}
		},
		defaultVariants: {
			uiSize: 'xs'
		}
	});
</script>

<div role="tooltip" transition:fly class={`zu_tooltip ${finalClass}`}>
	<span class={`zu_tooltip_cont ${tooltipCont({ uiRounded, uiSize })}`}>
		{@render children?.()}
		{content}
	</span>
	<div class={`zu_tooltip_tip ${tooltipTipStyle({ uiSize })}`}></div>
</div>

<style>
	.zu_tooltip {
		display: inline-block;
		position: absolute;
		bottom: 100%;
		left: 50%;
		height: max-content;
		transform: translateX(-50%);
		text-wrap: nowrap;
	}
	.zu_tooltip_cont {
		display: block;
		position: relative;
		z-index: 9999;
		height: 100%;
		background-color: inherit;
	}
	.zu_tooltip_tip {
		display: inline-block;
		position: absolute;
		bottom: 0;
		left: 50%;
		border: inherit;
		box-shadow: inherit;
		background-color: inherit;
		transform: translate(-50%, 50%) rotate(45deg);
	}
</style>
