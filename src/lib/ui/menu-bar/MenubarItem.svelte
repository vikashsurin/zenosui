<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { menuItemTheme } from './theme.js';
	import clsx from 'clsx';
	import { SIZE_PRESET } from '$lib/style/presets.js';
	import { baseVariant } from '$lib/style/base.js';
	import { getContext } from 'svelte';
	import type { MenuContentContextType, MenuContextType } from './types.ts';
	import { Icon } from '../icon/index.ts';
	import type { MenubarMenuItemProps } from '$lib/types/index.ts';
	import { MenubarShortcut } from './index.ts';

	let {
		children,
		onclick,
		href,
		iconLeft,
		leftSlot,
		iconRight,
		rightSlot,
		uiSize,
		shortcut,
		class: _class,
		...props
	}: MenubarMenuItemProps = $props();

	const menuContext = getContext<MenuContextType>('menuContext');

	const menuContentContext = getContext<MenuContentContextType>('menuContentContext');

	const leftSpaced = $derived(menuContentContext.leftSpaced);

	$effect(() => {
		if (iconLeft || leftSlot) {
			menuContentContext.leftSpaced = true;
		}
	});

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			(e.target as HTMLElement).click();
		}
	}

	// Determine element type based on href prop
	const el = $derived(href ? 'a' : 'button');

	const style = tv({
		extend: baseVariant,
		base: `w-full flex ${menuItemTheme}`,
		variants: {
			uiSize: SIZE_PRESET
		}
	});

	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));
</script>

<li role="none">
	<svelte:element
		this={el}
		data-menu-item
		href={href || undefined}
		role="menuitem"
		onkeydown={handleKeyDown}
		onclick={(e: MouseEvent) => {
			onclick?.(e);
			menuContext?.close?.();
		}}
		{...props}
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
		{:else if shortcut}
			<MenubarShortcut>{@render shortcut?.()}</MenubarShortcut>
		{/if}
	</svelte:element>
</li>
