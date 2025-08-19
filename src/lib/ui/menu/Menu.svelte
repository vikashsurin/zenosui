<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { innerHeight } from 'svelte/reactivity/window';
	import { baseVariant } from '$lib/style/index.js';
	import type { MenuProps } from '$lib/types/index.js';
	import { getContext, setContext, tick } from 'svelte';
	import { type MenuBarContextType, type MenuContextType } from './types.js';

	let { children, uiSize, uiRounded, class: _class, ...props }: MenuProps = $props();

	const menuBarContext = getContext<MenuBarContextType>('menuBarContext');
	uiRounded = uiRounded ? uiRounded : menuBarContext?.uiRounded;
	uiSize = uiSize ? uiSize : menuBarContext?.uiSize;

	const id = crypto.randomUUID();

	const state = $state({
		menuId: id,
		open: false,
		isSubmenuOpen: false
	});

	function openMenu() {
		state.open = true;
	}

	function closeMenu() {
		state.open = false;
	}
	function toggleMenu() {
		state.open = !state.open;
	}

	setContext('menuContext', {
		state,
		toggleMenu,
		openMenu,
		closeMenu,
		uiRounded,
		uiSize
	} as MenuContextType);

	$effect(() => {
		if (menuBarContext) {
			menuBarContext.state.openMenuId !== id ? closeMenu() : openMenu();
		}
	});

	let style = tv({
		extend: baseVariant,
		base: `relative  w-fit`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiRounded, class: clsx(_class) }));

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

	let menu: HTMLElement;
	let menuElements: NodeListOf<HTMLElement>;
	let menuTriggers: NodeListOf<HTMLElement> | undefined;
	let trigger: HTMLElement | null;
	$effect(() => {
		trigger = document.getElementById('zu_menu_trigger' + state.menuId);
		if (state.open && menuBarContext) {
			menuElements = menu.querySelectorAll('[role="menu"] > li > [role="menuitem"]');
		}
	});

	function handleKeyDown(e: KeyboardEvent) {
		if (!menuElements) return;
		const items = Array.from(menuElements);
		const idx = items.findIndex((item) => item === e.target);
		switch (e.key) {
			case 'ArrowDown':
				console.log(state.open);
				e.preventDefault();
				const nextIndex = (idx + 1) % items.length;
				items[nextIndex].focus();
				break;
			case 'ArrowUp':
				e.preventDefault();
				const prevIndex = (idx - 1 + items.length) % items.length;
				items[prevIndex].focus();
				break;
			case 'Escape':
				trigger?.focus();
				menu.blur();
				break;
			case 'ArrowRight':
				e.preventDefault();
				if (e.target instanceof Element && e.target.hasAttribute('aria-haspopup')) {
					// Safe and type-checked
					// e.target.click();
				} else {
					menuBarContext.handleFocusRightSibling(trigger);
				}
				break;
			case 'ArrowLeft':
				e.preventDefault();
				menuBarContext.handleFocusLeftSibling(trigger);
				break;
			case 'Enter':
				console.log('enter');
			case ' ':
				console.log('space');
		}
	}
</script>

{#if menuBarContext}
	<li
		role="none"
		{id}
		class={finalClass}
		{...props}
		bind:this={menu}
		onkeydown={(e: KeyboardEvent) => handleKeyDown(e)}
	>
		{#if children}
			{@render children?.()}
		{/if}
	</li>
{:else}
	<nav>
		<ul class={finalClass} {...props} role="menu">
			<li bind:this={menu}>
				{#if children}
					{@render children?.()}
				{/if}
			</li>
		</ul>
	</nav>
{/if}
