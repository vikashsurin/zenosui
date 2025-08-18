<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '$lib/style/index.js';
	import clsx from 'clsx';
	import { setContext } from 'svelte';
	import type { DivProps } from '$lib/types/index.js';
	import type { MenuBarContextType } from './types.ts';
	import type { UUID } from 'crypto';

	let { children, uiSize, uiRounded, class: _class }: DivProps = $props();

	const state = $state({
		isMenuBarActive: <boolean>false,
		openMenuId: <string | UUID | null>null
	});

	setContext('menuBarContext', { state, uiRounded, uiSize } as MenuBarContextType);

	const style = tv({
		extend: baseVariant,
		base: 'inline flex gap-1  w-fit p-1 rounded-sm',
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

<nav aria-label="Main navigation">
	<ul role="menubar" class={finalClasses}>
		{#if children}
			{@render children()}
		{/if}
	</ul>
</nav>
