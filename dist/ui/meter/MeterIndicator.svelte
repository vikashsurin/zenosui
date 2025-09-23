<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant } from '../../style/base.js';

	import type { MeterIndicatorProps } from '../../types/index.js';

	let {
		children,
		min,
		max,
		value,
		uiRounded,
		class: _class,
		...props
	}: MeterIndicatorProps = $props();

	min = Number(min ?? 0);
	max = Number(max ?? 100);
	value = Number(value ?? 0);

	let percent = $derived.by(() => {
		return Math.round(((value - min) / (max - min)) * 100);
	});

	let style = tv({
		extend: baseVariant,
		base: `zu_meter_indicator h-full bg-gray-700`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiRounded, class: clsx(_class) }));
</script>

<div
	role="meter"
	aria-valuenow={value ?? 0}
	class={finalClass}
	style={`width: ${percent}%;`}
	{...props}
>
	{@render children?.()}
</div>

<style>
	.zu_meter_indicator {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
