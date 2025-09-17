<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { getContext } from 'svelte';
	import type { SelectContextType } from './types.js';
	import { baseVariant } from '$lib/style/base.js';
	import { TEXT_SIZE_WITH_PADDING } from '$lib/style/sizing.js';
	import { PADDING } from '$lib/style/spacing.js';
	import type { SelectOptionProps } from '$lib/types/index.js';

	let {
		children,
		themed = true,
		uiSize,
		value,
		uiRounded,
		class: _class,
		...props
	}: SelectOptionProps = $props();
	const selectContext = getContext<SelectContextType>('selectContext');

	uiSize = uiSize ?? selectContext.uiSize;
	// uiRounded = uiRounded ?? selectContext.uiRounded;

	let style = tv({
		extend: baseVariant,
		base: `p-1 hover:bg-gray-200`,
		variants: {
			uiSize: TEXT_SIZE_WITH_PADDING,
			padding: PADDING
		},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class) }));

	function handleClick() {
		selectContext.value = value;
		selectContext.open = false;
	}
</script>

<li
	data-themed={themed}
	class:interactive_list={themed}
	class={finalClass}
	{...props}
	{value}
	onclick={handleClick}
>
	{@render children?.()}
</li>
