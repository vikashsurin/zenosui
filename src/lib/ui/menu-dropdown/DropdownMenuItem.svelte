<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { menuItemTheme } from './theme.js';
	import clsx from 'clsx';
	import { SIZE_PRESET } from '$lib/style/presets.js';
	import { baseVariant } from '$lib/style/base.js';
	import { getContext } from 'svelte';
	import type { DropdownMenuContentContextType, DropdownMenuContextType } from './types.ts';
	import { Icon } from '../icon/index.ts';
	import type { DropdownMenuItemProps } from '$lib/types/index.ts';
	let {
		children,
		props,
		onclick,
		href,
		uiSize,
		class: _class,
		iconLeft,
		leftSlot,
		iconRight,
		rightSlot
	}: DropdownMenuItemProps = $props();

	const dropdownMenuContext = getContext<DropdownMenuContextType>('dropdownMenuContext');

	const dropdownMenuContentContext = getContext<DropdownMenuContentContextType>(
		'dropdownMenuContentContext'
	);
	const leftSpaced = $derived(dropdownMenuContentContext.leftSpaced);

	$effect(() => {
		if (iconLeft || leftSlot) {
			dropdownMenuContentContext.leftSpaced = true;
		}
	});

	const style = tv({
		extend: baseVariant,
		base: ` ${menuItemTheme}`,
		variants: {
			uiSize: SIZE_PRESET
		}
	});

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			(e.target as HTMLElement).click();
		}
	}

	function closeMenu() {
		dropdownMenuContext.dropdownMenuState.close();
	}

	// Determine element type based on href prop
	const el = $derived(href ? 'a' : 'button');

	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));
</script>

<li role="none">
	<svelte:element
		this={el}
		data-menu-item
		href={el === 'a' ? (href ?? undefined) : undefined}
		role="menuitem"
		onkeydown={handleKeyDown}
		onclick={(e) => {
			onclick?.(e);
			closeMenu();
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
		{:else}
			<span class="h-[1em] w-[1em]"></span>
		{/if}
	</svelte:element>
</li>
