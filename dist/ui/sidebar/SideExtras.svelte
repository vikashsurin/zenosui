<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant } from '../../style/index.js';

	let { children, uiRounded, uiColorPreset, padding, class: _class, ...props } = $props();

	let style = tv({ extend: baseVariant, base: ``, variants: {}, defaultVariants: {} });
	const finalClass = $derived(style({ uiRounded, uiColorPreset, padding, class: clsx(_class) }));
</script>

<div class={finalClass} {...props}>
	{#if children}
		{@render children?.()}
	{/if}
</div>
