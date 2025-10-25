<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { innerHeight } from 'svelte/reactivity/window';
	import clsx from 'clsx';
	import { baseVariant } from '$lib/style/index.js';
	import type { MenuListProps } from '$lib/types/index.js';
	import { getContext } from 'svelte';
	import { clickOutside } from '$lib/utils/index.js';
	import type { MenuBarContextType, MenuContextType } from './types.js';
	import { fade } from 'svelte/transition';
	import { menuListTheme } from './theme.js';

	let {
		children,
		themed = true,
		placement,
		uiRounded,
		class: _class,
		...props
	}: MenuListProps = $props();

	const menuBarContext = getContext<MenuBarContextType>('menuBarContext');
	const menuContext = getContext<MenuContextType>('menuContext');
	const menuId = menuContext.state.menuId;
	// uiRounded = uiRounded ? uiRounded : menuContext?.uiRounded;

	let style = tv({
		extend: baseVariant,
		base: `zu_menu absolute max-h-[${innerHeight.current}] py-0.5 ${menuListTheme} w-auto flex flex-col shadow-lg border border-gray-50/50 z-[9999]`,
		variants: {
			placement: {
				bottom: 'top-[100%] mt-1.5',
				top: 'bottom-[100%] mb-1.5',
				right: 'left-[100%] top-0 ml-1',
				left: 'right-[100%] top-0 mr-1',
				'right-center': 'left-[100%] top-[50%] -translate-y-[50%] ml-1',
				'left-center': 'right-[100%] top-[50%] -translate-y-[50%] mr-1',
				'top-center': 'bottom-[100%] left-[50%] -translate-x-[50%] mb-1',
				'bottom-center': 'top-[100%] left-[50%] -translate-x-[50%] mt-1'
			}
		},
		defaultVariants: {
			placement: 'bottom'
		}
	});
	const finalClass = $derived(style({ uiRounded, placement, class: clsx(_class) }));

	function onClickOutside() {
		if (menuContext) {
			menuContext.closeMenu();
		}
		if (menuBarContext) {
			menuBarContext.state.openMenuId = null;
			menuBarContext.state.isMenuBarActive = false;
		}

		// console.log('clickOutside');
	}

	function openMenuList() {
		if (menuBarContext) {
			return menuBarContext.state.openMenuId === menuId;
		} else {
			return menuContext.state.open;
		}
	}
</script>

<!-- {#if menuContext.menuState.menuId === menuContext.menuState.openMenuId || menuContext.menuState.menuId === menuContext.openMenuId()} -->
{#if menuContext.state.open}
	<ul
		role="menu"
		id={'menu' + menuId}
		aria-labelledby={'zu_menu_trigger' + menuId}
		data-menu-type="main"
		data-expanded={''}
		in:fade={{ duration: 100 }}
		out:fade={{ duration: 100 }}
		class={finalClass}
		use:clickOutside={onClickOutside}
	>
		{@render children?.()}
	</ul>
{/if}
