<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { innerHeight } from 'svelte/reactivity/window';
	import clsx from 'clsx';
	import { baseVariant, type RoundedVariant } from '$lib/style/variant.js';
	import type { DropdownMenuProps } from '$lib/types.js';
	import { getContext } from 'svelte';

	let { children, roundedVariant, class: _class, ...props }: DropdownMenuProps = $props();

	const ddmenucontext = getContext<{ open: boolean; roundedVariant: RoundedVariant }>('dropdown');
	roundedVariant = roundedVariant ? roundedVariant : ddmenucontext.roundedVariant;

	let style = tv({
		extend: baseVariant,
		base: `zu_menu absolute max-h-[${innerHeight.current}]   p-2 bg-gray-200 w-fit flex flex-col shadow-lg border border-gray-50/50 `,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ roundedVariant, class: clsx(_class) }));
</script>

{#if ddmenucontext.open}
	<ul role="menu" class={finalClass} {...props}>
		{#if children}
			{@render children?.()}
		{/if}
	</ul>
{/if}
