<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { TRACK_SIZE } from '$lib/style/sizing.js';
	import type { RangeInputProps } from '$lib/types/index.ts';

	let {
		children,
		uiSize = 'md',
		uiTrackBg = '#444',
		uiThumbBg = '#444',
		class: _class,
		...props
	}: RangeInputProps = $props();

	let style = tv({
		base: `h-2 `,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
	console.log(TRACK_SIZE['xs']);

	let min = $state(Number(props.min) ?? 0);
	let max = $state(Number(props.max) ?? 100);
	let value = $state(Number(props.value) ?? 0);

	function calculatePercent() {
		let percent = ((value - min) / (max - min)) * 100;
		return `${percent}%`;
	}

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		value = Number(target.value);
	}
</script>

<input
	type="range"
	style={`--track-height: ${TRACK_SIZE[uiSize]}; --track-bg: ${uiTrackBg}; --thumb-bg: ${uiThumbBg}; --range-progress: ${calculatePercent()};`}
	class={finalClass}
	oninput={(event) => handleInput(event)}
	min={min ?? props.min}
	max={max ?? props.max}
	value={value ?? props.value}
	{...props}
/>

<!-- implement theme -->

<style>
	input[type='range'] {
		-webkit-appearance: none;
		appearance: none;
		cursor: pointer;
		padding: 0;
		margin: 0;
	}

	input[type='range']::-webkit-slider-runnable-track {
		background: linear-gradient(
			to right,
			var(--track-bg) 0%,
			var(--track-bg) var(--range-progress),
			#ccc var(--range-progress),
			#ccc 100%
		);
		height: var(--track-height);
		border-radius: 3px;
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		background: var(--thumb-bg);
		width: calc(var(--track-height) * 4);
		height: calc(var(--track-height) * 4);
		border-radius: 50%;
		margin-top: -5px;
		margin-top: calc((var(--track-height) * 4 - var(--track-height)) / -2);
		box-shadow: 0 0 2px oklch(from var(--thumb-bg) calc(l - 0.1) c h);
		transition: background 0.3s;
	}

	input[type='range']:hover::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		outline: 2px solid oklch(from var(--thumb-bg) calc(l + 0.09) c h);
	}

	input[type='range']:focus::-webkit-slider-thumb {
		outline: 2px solid oklch(from var(--thumb-bg) calc(l + 0.2) c h/ calc(alpha - 0.5));
	}
	input[type='range']:active::-webkit-slider-thumb {
		outline: 2px solid oklch(from var(--thumb-bg) calc(l + 0.05) c h / calc(alpha - 0.5));
	}
</style>
