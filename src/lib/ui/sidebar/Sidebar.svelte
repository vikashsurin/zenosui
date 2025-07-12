<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { SidebarProps } from '$lib/types.js';
	import { baseVariant } from '$lib/style/variant.js';
	import { setContext } from 'svelte';

	let { children, roundedVariant, sizeVariant, class: _class }: SidebarProps = $props();
	const sideBarContext = $state({
		sizeVariant: sizeVariant,
		roundedVariant: roundedVariant
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
