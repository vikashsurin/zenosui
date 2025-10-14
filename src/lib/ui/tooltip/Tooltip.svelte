<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import TooltipPopup from './_TooltipPopup.svelte';
	import type { TooltipProps } from '$lib/types/index.js';

	let { children, uiRounded, content, uiSize, class: _class, ...props }: TooltipProps = $props();

	let style = tv({
		base: `.zu_tooltip_maker relative inline-block`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx() }));

	let showTooltip = $state(false);

	function handleMouseEnter() {
		showTooltip = true;
	}
	function handleMouseLeave() {
		showTooltip = false;
	}
</script>

<div class={finalClass} {...props} onmouseenter={handleMouseEnter} onmouseleave={handleMouseLeave}>
	{#if showTooltip}
		<TooltipPopup {uiRounded} {content} {uiSize} class={_class} />
	{/if}
	{@render children?.()}
</div>
