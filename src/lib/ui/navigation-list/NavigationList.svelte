<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { NavigationListProps } from '$lib/types/index.js';
	import { baseVariant } from '$lib/style/index.js';
	import { setContext } from 'svelte';
	import type { NavigationListContextType } from './types.ts';

	let { children, uiRounded, uiSize, class: _class }: NavigationListProps = $props();
	let navListState = $state({
		childHasLeftIcon: false,
		uiSize: uiSize,
		uiRounded: uiRounded,
		openId: <string | null>null
	} as NavigationListContextType);

	setContext('navListState', navListState);
	let style = tv({
		extend: baseVariant,
		base: `flex flex-col w-fit`,
		variants: {},
		defaultVariants: {}
	});
	$inspect({ navListState });
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<nav class="nav">
	<ul class={finalClass}>
		{#if children}
			{@render children?.()}
		{/if}
	</ul>
</nav>
