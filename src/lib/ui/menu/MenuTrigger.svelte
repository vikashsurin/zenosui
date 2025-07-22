<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button } from '$lib/ui/index.js';
	import { getContext } from 'svelte';
	import type { MenuTriggerProps } from '$lib/types.js';
	import type { RoundedVariant, SizeVariant } from '$lib/style/index.js';

	let {
		children,
		uiRounded,
		uiSize,
		label,
		iconLeft,
		iconRight,
		class: _class,
		...props
	}: MenuTriggerProps = $props();

	const menuContext = getContext<{
		menuState: {
			menuId: string,
			openMenuId: string | null
		},
		openMenuId: string | null,
		uiRounded: RoundedVariant,
		uiSize: SizeVariant,
		setActiveMenu: ({ _id, type }) => void
	}>('menuContext');

	uiRounded = uiRounded ? uiRounded : menuContext.uiRounded;
	uiSize = uiSize ? uiSize : menuContext.uiSize;

	// const menuBarContext = getContext<{
	// 	activeMenu: { id: string },
	// 	setActiveMenu: (id: string | null) => void
	// }>('menuBarContext');
	//
	$inspect('from trigger', menuContext.openMenuId);

	function handleFunc(type: 'click' | 'hover') {
		const id = menuContext.menuState.menuId;
		const activeId = menuContext.menuState.openMenuId;
		if (id === activeId && type === 'click') {
			menuContext.setActiveMenu({ _id: null, type });
		} else {
			menuContext.setActiveMenu({ _id: id, type });
		}
	}

	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {
			uiRounded: 'sm',
			uiSize: 'xs'
		}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<Button
	class={finalClass}
	{label}
	{iconLeft}
	{iconRight}
	{...props}
	{uiRounded}
	{uiSize}
	onclick={() => handleFunc('click')}
	onmouseenter={() => handleFunc('hover')}
>
	{#if children}
		{@render children?.()}
	{/if}
</Button>
