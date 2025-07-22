<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '$lib/style/index.js';
	import clsx from 'clsx';
	import { setContext } from 'svelte';
	import type { DivProps } from '$lib/types.js';

	let { children, class: _class }: DivProps = $props();

	// const menuBar = $state({
	// 	activeMenuId: null
	// });
	//
	const activeMenu = $state({
		id: <string | null>null
	});
	const setActiveMenu = (id: string | null) => {
		activeMenu.id = id;
	};
	setContext('menuBarContext', { activeMenu, setActiveMenu });


	// setContext('menuBar', menuBar);
	const style = tv({
		extend: baseVariant,
		base: 'inline flex gap-1 bg-gray-800 w-fit p-1 rounded-sm',
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
