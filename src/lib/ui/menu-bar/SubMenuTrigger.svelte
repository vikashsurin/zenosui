<script lang="ts">
	import { getContext } from 'svelte';
	import type { subMenuContextType } from './types.ts';
	import SubmenuContent from '../menu/SubmenuContent.svelte';
	import { baseVariant } from '$lib/style/base.js';
	import { menuItemTheme } from './theme.js';
	import { SIZE_PRESET } from '$lib/style/presets.js';
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	let { children, uiSize, class: _class } = $props();

	const style = tv({
		extend: baseVariant,
		base: `flex w-max items-center gap-2  ${menuItemTheme}`,
		variants: {
			uiSize: SIZE_PRESET
		}
	});

	let el = $state<HTMLElement | null>(null);
	const subMenuContext = getContext<subMenuContextType>('subMenuContext');

	function openSubmenu() {
		subMenuContext.subMenuState.open();
	}

	function closeSubmenu() {
		subMenuContext.subMenuState.close();
	}

	function handleClick() {
		subMenuContext.subMenuState.open();
	}

	function handlekeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			openSubmenu();
			e.preventDefault();
			e.stopPropagation();
			if (subMenuContext) {
				subMenuContext.subMenuState.setSubMenuTriggerFocus(false);
				subMenuContext.subMenuState.setFirstMenuItemFocus(true);
			}
		}

		if (e.key === 'Escape') {
			closeSubmenu();
		}
		if (e.key === 'ArrowLeft') {
			closeSubmenu();
		}

		if (e.key === 'ArrowRight') {
			openSubmenu();
			if (subMenuContext) {
				subMenuContext.subMenuState.setSubMenuTriggerFocus(false);
				subMenuContext.subMenuState.setFirstMenuItemFocus(true);
			}
		}
	}

	$effect(() => {
		if (subMenuContext.subMenuState.focusSubMenuTrigger) {
			el?.focus();
		}
	});
	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));
</script>

<button
	data-menu-item
	bind:this={el}
	role="menuitem"
	aria-haspopup="true"
	class={finalClass}
	data-submenu-id={subMenuContext.subMenuState.subMenuId}
	onmouseenter={openSubmenu}
	onmouseleave={closeSubmenu}
	onclick={handleClick}
	onkeydown={(e) => handlekeydown(e)}
>
	{@render children?.()}
</button>
