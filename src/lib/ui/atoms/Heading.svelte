<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { HeadingProps } from '$lib/types/index.js';
	import { TEXT_SIZE } from '$lib/style/sizing.js';

	let { children, uiSize, class: _class }: HeadingProps = $props();

	let style = tv({
		base: ``,
		variants: { uiSize: TEXT_SIZE },
		defaultVariants: {}
	});
	let as = $state('h1');
	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));
</script>

<svelte:element this={as} class={finalClass}>
	{@render children()}
</svelte:element>
