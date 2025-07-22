<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { innerHeight } from 'svelte/reactivity/window';
	import clsx from 'clsx';
	import { baseVariant, type RoundedVariant } from '$lib/style/index.js';
	import type { MenuListProps } from '$lib/types.js';
	import { getContext } from 'svelte';
	import { clickOutside } from '$lib/utils/utils.js';

	let { children, placement, uiRounded, class: _class, ...props }: MenuListProps = $props();

	const menuContext = getContext<{
		menuState: {
			menuId: string,
			openMenuId: string | null
		},
		uiRounded: RoundedVariant,
		setActiveMenu: (id: string | null) => void
	}>('menuContext');
	uiRounded = uiRounded ? uiRounded : menuContext.uiRounded;

	const subMenuContext = getContext<{ open: string | null }>('subMenuContext');
	let style = tv({
		extend: baseVariant,
		base: `zu_menu absolute max-h-[${innerHeight.current}] py-0.5 bg-gray-200 w-auto flex flex-col shadow-lg border border-gray-50/50 z-[9999]`,
		variants: {
			placement: {
				bottom: 'top-[100%]',
				top: 'bottom-[100%]',
				right: 'left-[100%]',
				left: 'right-[100%]',
				'right-center': 'left-[100%] top-[50%] -translate-y-[50%]',
				'left-center': 'right-[100%] top-[50%] -translate-y-[50%]',
				'top-center': 'bottom-[100%] left-[50%] -translate-x-[50%]',
				'bottom-center': 'top-[100%] left-[50%] -translate-x-[50%]'
			}
		},
		defaultVariants: {
			placement: 'right'
		}
	});
	const finalClass = $derived(style({ uiRounded, placement, class: clsx(_class) }));

	function onclickOutside() {
		console.log('clickOutside');
	}
</script>

{#if menuContext.menuState.menuId === menuContext.menuState.openMenuId && subMenuContext.open}
	<ul role="menu" use:clickOutside={onclickOutside} class={finalClass} {...props}>
		{#if children}
			{@render children?.()}
		{/if}
	</ul>
{/if}
