<script lang="ts">
	import { getContext } from 'svelte';
	import type { DropdownMenuContentContextType, subMenuContextType } from './types.ts';
	import { baseVariant } from '$lib/style/base.js';
	import { menuItemTheme } from './theme.js';
	import { SIZE_PRESET } from '$lib/style/presets.js';
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Icon } from '../icon/index.ts';
	let { children, uiSize, class: _class, iconLeft, leftSlot, iconRight, rightSlot } = $props();

	const dropdownMenuContentContext = getContext<DropdownMenuContentContextType>(
		'dropdownMenuContentContext'
	);
	const leftSpaced = $derived(dropdownMenuContentContext.leftSpaced);

	let el = $state<HTMLElement | null>(null);
	const subMenuContext = getContext<subMenuContextType>('subMenuContext');

	$effect(() => {
		if (iconLeft || leftSlot) {
			dropdownMenuContentContext.leftSpaced = true;
		}
	});

	function openSubmenu() {
		subMenuContext.subMenuState.open();
	}

	function closeSubmenu() {
		subMenuContext.subMenuState.close();
	}

	function handleClick() {
		openSubmenu();
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			e.stopPropagation();
			openSubmenu();
			subMenuContext.subMenuState.setSubMenuTriggerFocus(false);
			subMenuContext.subMenuState.setFirstMenuItemFocus(true);
		} else if (e.key === 'Escape' || e.key === 'ArrowLeft') {
			closeSubmenu();
		} else if (e.key === 'ArrowRight') {
			openSubmenu();
			subMenuContext.subMenuState.setSubMenuTriggerFocus(false);
			subMenuContext.subMenuState.setFirstMenuItemFocus(true);
		}
	}

	$effect(() => {
		if (subMenuContext.subMenuState.focusSubMenuTrigger) {
			el?.focus();
		}
	});

	const style = tv({
		extend: baseVariant,
		base: `flex w-max items-center gap-2  ${menuItemTheme}`,
		variants: {
			uiSize: SIZE_PRESET
		}
	});
	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));
</script>

<button
	data-menu-item
	bind:this={el}
	role="menuitem"
	aria-haspopup="true"
	data-submenu-id={subMenuContext.subMenuState.subMenuId}
	onmouseenter={openSubmenu}
	onmouseleave={closeSubmenu}
	onclick={handleClick}
	onkeydown={handleKeyDown}
	class={finalClass}
>
	{#if iconLeft}
		<Icon icon={iconLeft} {uiSize} />
	{:else if leftSlot}
		{@render leftSlot?.()}
	{:else if leftSpaced}
		<span class="h-[1em] w-[1em]"></span>
	{/if}
	{@render children?.()}
	{#if iconRight}
		<Icon icon={iconRight} {uiSize} class="ml-auto" />
	{:else if rightSlot}
		{@render rightSlot?.()}
	{:else}
		<span class="h-[1em] w-[1em]"></span>
	{/if}
</button>
