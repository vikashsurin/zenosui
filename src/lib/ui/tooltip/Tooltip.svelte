<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import TooltipPopup from './_TooltipPopup.svelte';
	import type { TooltipProps } from '$lib/types/index.js';
	import { c } from 'svelte-highlight/languages';

	let {
		children,
		uiRounded,
		render: CustomComponent,
		content,
		delay,
		uiSize,
		class: _class,
		...props
	}: TooltipProps = $props();

	let style = tv({
		base: `.zu_tooltip_maker relative inline-block`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx() }));

	function wait(ms: number | undefined) {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(true);
			}, ms ?? 0);
		});
	}

	let showTooltip = $state(false);

	async function handleMouseEnter() {
		await wait(delay);
		showTooltip = true;
	}
	async function handleMouseLeave() {
		await wait(delay);
		showTooltip = false;
	}
</script>

<span class={finalClass} {...props} onmouseenter={handleMouseEnter} onmouseleave={handleMouseLeave}>
	{#if showTooltip}
		<TooltipPopup {uiRounded} {content} {uiSize} class={_class}>
			{#if CustomComponent !== undefined}
				<CustomComponent />
			{/if}
		</TooltipPopup>
	{/if}
	{@render children?.()}
</span>
