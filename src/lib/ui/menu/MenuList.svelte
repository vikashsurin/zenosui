<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { innerHeight } from 'svelte/reactivity/window';
	import clsx from 'clsx';
	import { baseVariant, type RoundedVariant } from '$lib/style/index.js';
	import type { MenuListProps } from '$lib/types/index.js';
	import { getContext } from 'svelte';
	import { clickOutside } from '$lib/utils/utils.js';
	import type { MenuContextType } from './types.js';
	import { blur, crossfade, fade, fly, scale, slide } from 'svelte/transition';
	let { children, placement, uiRounded, class: _class, ...props }: MenuListProps = $props();

	const menuContext = getContext<MenuContextType>('menuContext');

	uiRounded = uiRounded ? uiRounded : menuContext.uiRounded;

	let style = tv({
		extend: baseVariant,
		base: `zu_menu absolute max-h-[${innerHeight.current}] py-0.5 bg-gray-200 w-auto flex flex-col shadow-lg border border-gray-50/50 z-[9999]`,
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

	function onclickOutside() {
		// clickOutside(menuContext, finalClass);
		menuContext.setActiveMenu({ _id: null, type: 'click' });
		console.log('clickOutside');
	}
</script>

{#if menuContext.menuState.menuId === menuContext.menuState.openMenuId || menuContext.menuState.menuId === menuContext.openMenuId()}
	<ul
		role="menu"
		in:slide={{ duration: 300 }}
		out:slide={{ duration: 300 }}
		use:clickOutside={onclickOutside}
		class={finalClass}
		{...props}
	>
		{#if children}
			{@render children?.()}
		{/if}
	</ul>
{/if}
