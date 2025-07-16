<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '$lib/style/index.js';
	import clsx from 'clsx';
	import { setContext } from 'svelte';

	let { children, class: _class } = $props();
	const menuBar = $state({
		activeMenuId: null
	});

	setContext('menuBar', menuBar);
	const style = tv({
		extend: baseVariant,
		base: '',
		variants: {},
		compoundVariants: [],
		defaultVariants: {}
	});

	const finalClasses = $derived(
		style({
			class: clsx(_class)
		})
	);
</script>

<div class={finalClasses}>
	{#if children}
		{@render children()}
	{/if}
</div>
