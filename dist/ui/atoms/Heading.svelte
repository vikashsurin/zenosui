<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { HeadingProps } from '../../types/index.js';

	let { children, class: _class }: HeadingProps = $props();

	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	let as = $state('h1');
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>
<svelte:element this={as} class={finalClass }>
	{#if children}
		{@render children()}
	{/if}
</svelte:element>