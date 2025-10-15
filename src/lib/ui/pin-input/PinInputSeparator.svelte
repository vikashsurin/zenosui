<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import Dot from '@lucide/svelte/icons/dot';
	import { Icon } from '../icon/index.ts';
	import { getContext, type Component } from 'svelte';
	import type { SizeVariant } from '$lib/types/index.ts';
	import type { PinInputControlContextType } from './types.ts';

	let {
		class: _class,
		icon,
		uiSize
	}: { class?: string; icon?: Component; uiSize?: SizeVariant } = $props();

	const context = getContext<PinInputControlContextType>('PinInputControlContext');
	uiSize = uiSize ? uiSize : context.uiSize;

	let style = tv({
		base: `inline-flex items-center justify-center `,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<span class={finalClass}>
	{#if icon !== undefined}
		<Icon {uiSize} {icon} />
	{:else}
		<Dot />
	{/if}
</span>
