<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '$lib/style/index.js';
	import clsx from 'clsx';
	import type { NavigationMenuListProps } from '$lib/types.js';
	import { getContext } from 'svelte';
	import { clickOutside } from '$lib/utils/utils.js';

	let { placement, children, class: _class, ...props }: NavigationMenuListProps = $props();

	const navMenuCtx = getContext<{ menu: { id: string } }>('navMenu');
	const navMenuBarCtx = getContext<{
		activeNavMenu: { id: string };
		setActiveNavMenu: (id: string | null) => void;
		clearCloseTimeout: () => void;
		scheduleClose: () => void;
	}>('navMenuBar');

	const style = tv({
		extend: baseVariant,
		base: 'grid gap-2 zu_navigation_menu absolute shadow-md',
		variants: {
			placement: {
				bottom: 'top-[100%] mt-2 ',
				top: 'bottom-[100%] mb-1.5 ',
				right: 'left-[100%] top-0 ml-1',
				left: 'right-[100%] top-0 mr-1',
				'right-center': 'left-[100%] top-[50%] -translate-y-[50%] ml-1',
				'left-center': 'right-[100%] top-[50%] -translate-y-[50%] mr-1',
				'top-center': 'bottom-[100%] left-[50%] -translate-x-[50%] mb-1',
				'bottom-center': 'top-[100%] left-[50%] -translate-x-[50%] mt-2.5'
			}
		},
		compoundVariants: [],
		defaultVariants: {
			placement: 'bottom-center'
		}
	});

	const finalClasses = $derived(
		style({
			placement,
			class: clsx(_class)
		})
	);

	function onclickOutside() {
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
		use:clickOutside={onclickOutside}
		class={finalClasses}
		{...props}
		onmouseenter={handleMouseEnter}
		onmouseleave={handleMouseLeave}
	>
		{#if children}
			{@render children()}
		{/if}
	</ul>
{/if}

<style>
	.zu_navigation_menu::before {
		content: '';
		display: block;
		position: absolute;
		top: -10px; /* or bottom: -10px for a bottom arrow */
		left: 50%;
		transform: translate(-50%);
		width: 0;
		height: 0;
		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		border-bottom: 10px solid gray;
	}
</style>
