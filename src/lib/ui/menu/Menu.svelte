<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { innerHeight } from 'svelte/reactivity/window';
	import { baseVariant } from '$lib/style/index.js';
	import type { MenuProps } from '$lib/types/index.js';
	import { getContext, setContext } from 'svelte';
	import { type MenuBarContextType } from './types.js';

	let { children, uiSize, uiRounded, class: _class, ...props }: MenuProps = $props();

	const menuBarContext = getContext<MenuBarContextType>('menuBarContext');
	uiRounded = uiRounded ? uiRounded : menuBarContext?.uiRounded;
	uiSize = uiSize ? uiSize : menuBarContext?.uiSize;

	const id = crypto.randomUUID();
	const menuState = $state({
		menuId: id,
		openMenuId: <string | null>null
	});

	const openMenuId = $derived.by(() => {
		if (menuBarContext) {
			return menuBarContext.activeMenu.id;
		} else {
			return menuState.openMenuId;
		}
	});

	const setActiveMenu = (props: { _id: string | null; type: string }) => {
		if (menuBarContext) {
			if (menuBarContext.activeMenu.id === props._id && props.type === 'click') {
				menuBarContext.setActiveMenu(null);
			} else {
				menuBarContext.setActiveMenu(props._id);
			}
		} else {
			menuState.openMenuId = props._id;
		}
	};

	setContext('menuContext', {
		menuState: menuState,
		openMenuId: () => openMenuId,
		setActiveMenu: setActiveMenu,
		uiRounded: uiRounded,
		uiSize: uiSize
	});

	let style = tv({
		extend: baseVariant,
		base: `relative  w-fit`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiRounded, class: clsx(_class) }));

	let menu_cont: HTMLDivElement;

	// $effect(() => {
	// 	const screenHeight =
	// 		innerHeight.current !== undefined
	// 			? innerHeight.current
	// 			: typeof window !== 'undefined'
	// 				? window.innerHeight
	// 				: 0;
	//
	// 	const dd = menu_cont.querySelector('.zu_menu') as HTMLUListElement | null;
	// 	if (dd && dd.parentNode instanceof HTMLElement) {
	// 		const parentSize = dd.parentNode.getBoundingClientRect();
	// 		if (parentSize.bottom + dd.clientHeight > screenHeight) {
	// 			dd.style.top = 'auto';
	// 			dd.style.bottom = '100%';
	// 		} else {
	// 			dd.style.top = '100%';
	// 			dd.style.bottom = 'auto';
	// 		}
	// 	}
	// });
</script>

<div {id} class={finalClass} {...props} bind:this={menu_cont}>
	{#if children}
		{@render children?.()}
	{/if}
</div>
