<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant } from '../../style/base.js';
	import { SIZE } from '../../style/sizing.js';
	import type { MeterTrackProps } from '../../types/index.js';

	let { uiSize, uiRounded, children, class: _class, ...props }: MeterTrackProps = $props();

	let style = tv({
		extend: baseVariant,
		base: `zu_meter_track w-full h-20 bg-gray-300 overflow-hidden `,
		variants: {
			uiSize: SIZE
		},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class) }));
</script>

<div class={finalClass} {...props}>
	{#if children}
		{@render children?.()}
	{/if}
</div>

<style>
	.zu_meter_track {
		position: relative;
		display: inline-block;
		width: 100%;
	}
</style>
