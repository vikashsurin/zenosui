<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { NavigationListProps } from '$lib/types.js';
	import { baseVariant } from '$lib/style/index.js';
	import { setContext } from 'svelte';

	let { children, uiRounded, uiSize, class: _class }: NavigationListProps = $props();
	const sideBarContext = $state({
		uiSize: uiSize,
		uiRounded: uiRounded
	});
	setContext('sidebar', sideBarContext);

	let style = tv({
		extend: baseVariant,
		base: `flex flex-col w-fit`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<nav>
	<ul class={finalClass}>
		{#if children}
			{@render children?.()}
		{/if}
	</ul>
</nav>
