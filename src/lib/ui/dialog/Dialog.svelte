<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { setContext } from 'svelte';

	import { baseVariant } from '$lib/style/index.js';
	import type { DialogProps } from '$lib/types/index.js';

	let {
		children,
		uiRounded,
		open = $bindable(),
		backdrop,
		class: _class,
		...props
	}: DialogProps = $props();

	setContext('dialogCtx', {
		close: () => {
			open = false;
		}
	});

	let style = tv({
		extend: baseVariant,
		base: `flex  flex-col w-1/4 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] gap-2 p-4 bg-gray-100`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiRounded, class: clsx(_class) }));
</script>

{#if open}
	{#if backdrop}
		<div class="zu_dialog_backdrop position absolute inset-0 bg-black/50"></div>
	{/if}
	<dialog class={finalClass} {...props}>
		{#if children}
			{@render children?.()}
		{/if}
	</dialog>
{/if}
