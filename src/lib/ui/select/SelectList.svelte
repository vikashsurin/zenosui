<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { SelectContextType } from './types.js';
	import { getContext } from 'svelte';
	import { baseVariant } from '$lib/style/base.js';
	import { slide } from 'svelte/transition';
	import { clickOutside } from '$lib/utils/utils.js';
	import type { SelectListProps } from '$lib/types/index.js';

	let { children, uiRounded, class: _class, ...props }: SelectListProps = $props();
	const selectContext = getContext<SelectContextType>('selectContext');

	uiRounded = uiRounded ?? selectContext.uiRounded;

	let style = tv({
		extend: baseVariant,
		base: `bg-gray-300 my-1 py-1 absolute text-nowrap`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiRounded, class: clsx(_class) }));

	function onClickOutside() {
		selectContext.open = false;
	}
</script>

{#if selectContext.open}
	<ul
		class={finalClass}
		use:clickOutside={onClickOutside}
		{...props}
		in:slide={{ duration: 300 }}
		out:slide={{ duration: 200 }}
	>
		{@render children?.()}
	</ul>
{/if}
