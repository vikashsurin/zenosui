<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '$lib/style/index.js';
	import clsx from 'clsx';
	import type { NavigationMenuListProps } from '$lib/types/index.js';
	import { getContext } from 'svelte';
	import { clickOutside } from '$lib/utils/index.ts';
	import { fly } from 'svelte/transition';

	let { placement, children, class: _class, ...props }: NavigationMenuListProps = $props();

	const navMenuCtx = getContext<{ menu: { id: string } }>('navMenu');
	const navMenuBarCtx = getContext<{
		activeNavMenu: { id: string };
		setActiveNavMenu: (id: string | null) => void;
		clearCloseTimeout: () => void;
		scheduleClose: () => void;
	}>('navMenuBar');

	const list = tv({
		extend: baseVariant,
		base: `zu_navigation_menu p-2`,
		variants: {
			placement: {
				bottom: 'top-[100%] mt-2',
				top: 'bottom-[100%] mb-1.5',
				right: 'left-[100%] top-0 ml-1',
				left: 'right-[100%] top-0 mr-1',
				'right-center': 'left-[100%] top-[50%] -translate-y-[50%] ml-1',
				'left-center': 'right-[100%] top-[50%] -translate-y-[50%] mr-1',
				'top-center': 'bottom-[100%] left-[50%] -translate-x-[50%] mb-1',
				'bottom-center': 'top-[100%] left-[50%] -translate-x-[50%] mt-2.5'
			}
		},
		defaultVariants: {
			placement: 'bottom-center'
		}
	});

	const finalClasses = $derived(
		list({
			placement,
			class: clsx(_class)
		})
	);

	function onClickOutside() {
		navMenuBarCtx.setActiveNavMenu(null);
	}
	function handleMouseEnter() {
		navMenuBarCtx.clearCloseTimeout();
	}
	function handleMouseLeave() {
		navMenuBarCtx.scheduleClose();
	}
</script>

{#if navMenuBarCtx.activeNavMenu.id === navMenuCtx.menu.id}
	<ul
		class={finalClasses}
		in:fly={{ duration: 200, y: -10 }}
		out:fly={{ duration: 200, y: -5 }}
		use:clickOutside={onClickOutside}
		{...props}
		onmouseenter={handleMouseEnter}
		onmouseleave={handleMouseLeave}
	>
		<div class="zu_navigation_menu_caret"></div>
		{#if children}
			{@render children()}
		{/if}
	</ul>
{/if}

<style>
	.zu_navigation_menu {
		flex-direction: column;
		position: absolute;
		border: 1px solid black;
	}
	.zu_navigation_menu::after {
		content: '';
		position: absolute;
		inset: 0;
		background-color: inherit;
		border-radius: inherit;
		z-index: -1;
	}
	.zu_navigation_menu_caret {
		display: inline-block;
		position: absolute;
		left: 50%;
		top: 0;
		transform: translateX(-50%) translateY(-50%) rotate(45deg);
		height: 10px;
		width: 10px;
		background-color: inherit;
		border: inherit;
		z-index: -2;
		background-color: inherit;
	}
</style>
