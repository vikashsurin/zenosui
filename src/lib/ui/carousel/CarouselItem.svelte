<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { getContext } from 'svelte';

	let { children, class: _class, ...props } = $props();

	let carouselStyleContext = getContext('carouselStyle');

	$inspect({ carouselStyleContext });

	carouselStyleContext.class = _class;
	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div>
	{#if children}
		{@render children?.()}
	{/if}
</div>
