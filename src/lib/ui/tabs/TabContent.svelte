<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { getContext } from 'svelte';

	let { children, id, show, class: _class, ...props } = $props();
	let tabState = getContext<{ openTabId: string }>('tabState');

	$inspect('from TabContent', tabState.openTabId);

	let style = tv({
		base: `inline-block p-2 bg-gray-100 w-full h-full`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

{#if tabState.openTabId === id}
	<div class={finalClass} {...props}>
		{#if children}
			{@render children?.()}
		{/if}
	</div>
{/if}
