<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant, type RoundedVariant } from '$lib/style/index.js';
	import type { DropdownMenuProps } from '$lib/types.js';
	import { getContext } from 'svelte';

	let { children, uiRounded, class: _class, ...props }: DropdownMenuProps = $props();

	const menuContext = getContext<{ open: boolean; uiRounded: RoundedVariant }>('dropdown');
	uiRounded = uiRounded ? uiRounded : menuContext.uiRounded;

	const submenu = getContext<{ open: boolean }>('submenu');

	let style = tv({
		extend: baseVariant,
		base: `absolute left-[100%] top-[-20%] p-2 bg-gray-200 w-fit flex flex-col shadow-lg border border-gray-50/50`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiRounded, class: clsx(_class) }));
</script>

{#if submenu.open}
	<ul class={finalClass} {...props}>
		{#if children}
			{@render children?.()}
		{/if}
	</ul>
{/if}
