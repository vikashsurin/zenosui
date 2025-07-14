<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant } from '$lib/style/variant.js';
	import type { AlertDialogProps } from '$lib/types.js';
	import { setContext } from 'svelte';

	let {
		children,
		roundedVariant,
		open = $bindable(),
		class: _class,
		...props
	}: AlertDialogProps = $props();

	let style = tv({
		extend: baseVariant,
		base: `flex  flex-col w-1/4 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] trn p-4 bg-gray-100 `,
		variants: {},
		defaultVariants: {
			roundedVariant: 'lg'
		}
	});
	const finalClass = $derived(style({ roundedVariant, class: clsx(_class) }));

	function closeAlertDialog() {
		open = false;
	}

	setContext('alertCtx', { close: closeAlertDialog });
</script>

{#if open}
	<div class="position absolute inset-0 bg-black/50"></div>
	<dialog role="alertdialog" open={true} class={finalClass} {...props}>
		{#if children}
			{@render children?.()}
		{/if}
	</dialog>
{/if}
