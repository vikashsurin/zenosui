<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import Button from '../button/Button.svelte';
	import { getContext } from 'svelte';

	let { children, active, id, class: _class, ...props } = $props();

	let tabState = getContext<{ openTabId: string }>('tabState');

	let style = tv({
		base: `box-border`,

		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<Button
	active={tabState.openTabId === id}
	class={finalClass}
	onclick={() => (tabState.openTabId = id)}
	{...props}
>
	{#if children}
		{@render children?.()}
	{/if}
</Button>
