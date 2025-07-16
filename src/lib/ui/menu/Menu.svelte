<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { innerHeight } from 'svelte/reactivity/window';
	import { baseVariant, type RoundedVariant, type SizeVariant } from '$lib/style/index.js';
	import type { DropdownProps } from '$lib/types.js';
	import { getContext, setContext } from 'svelte';

	let { children, uiSize, uiRounded, class: _class, ...props }: DropdownProps = $props();

	const menuId = crypto.randomUUID();

	const menuBarCtx = getContext<{ activeMenuId: string | null }>('menuBar');

	let open = $state(false);

	function toggleMenu() {
		if (!menuBarCtx) {
			open = !open;
			return;
		}
		if (menuBarCtx.activeMenuId === menuId) {
			return menuBarCtx.activeMenuId = null;
		}
		open = menuBarCtx.activeMenuId === menuId;
		menuBarCtx.activeMenuId = menuId;
	}

	const handleOpen = () => {
		if (!menuBarCtx) {
			return open;
		}
		return menuBarCtx.activeMenuId === menuId;
	};

	let menuContext = $state({
		open: () => handleOpen(),
		uiSize: uiSize as SizeVariant,
		uiRounded: uiRounded as RoundedVariant,
		toggleMenu,
		menuId: menuId
	});

	setContext('dropdown', menuContext);


	let style = tv({
		extend: baseVariant,
		base: `relative`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiRounded, class: clsx(_class) }));

	let menu_cont: HTMLDivElement;

	$effect(() => {
		const screenHeight =
			innerHeight.current !== undefined
				? innerHeight.current
				: typeof window !== 'undefined'
					? window.innerHeight
					: 0;

		const dd = menu_cont.querySelector('.zu_menu') as HTMLUListElement | null;
		if (dd && dd.parentNode instanceof HTMLElement) {
			const parentSize = dd.parentNode.getBoundingClientRect();
			if (parentSize.bottom + dd.clientHeight > screenHeight) {
				dd.style.top = 'auto';
				dd.style.bottom = '100%';
			} else {
				dd.style.top = '100%';
				dd.style.bottom = 'auto';
			}
		}
	});
</script>

<div id={menuId} class={finalClass} {...props} bind:this={menu_cont}>
	{#if children}
		{@render children?.()}
	{/if}
</div>