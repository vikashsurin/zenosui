<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { setContext } from 'svelte';

	let { children, class: _class, ...props } = $props();

	let tabState = $state({
		openTabId: 'tab1'
	});
	setContext('tabState', tabState);

	$inspect({ tabState });
	let style = tv({
		base: `zu_tabs`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div class={finalClass} {...props}>
	{#if children}
		{@render children?.()}
	{/if}
</div>

<style>
	.zu_tabs {
		/* display: flex; */
	}
</style>
