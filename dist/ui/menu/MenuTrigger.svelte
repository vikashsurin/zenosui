<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button } from '../index.js';
	import { getContext } from 'svelte';
	import type { MenuTriggerProps } from '../../types/index.js';
	import type { MenuContextType } from './types.js';

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

	const menuContext = getContext<MenuContextType>('menuContext');
	uiRounded = uiRounded ? uiRounded : menuContext.uiRounded;
	uiSize = uiSize ? uiSize : menuContext.uiSize;

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
