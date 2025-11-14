<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { menuItemTheme } from './theme.js';
	import clsx from 'clsx';
	import { SIZE_PRESET } from '$lib/style/presets.js';
	import { baseVariant } from '$lib/style/base.js';
	import { getContext } from 'svelte';
	import type { MenuContentContextType, MenuContextType } from './types.ts';
	import { Icon } from '../icon/index.ts';
	import type { MenuBarMenuItemProps } from '$lib/types/index.ts';

	let {
		children,
		props,
		href,
		iconLeft,
		leftSlot,
		iconRight,
		rightSlot,
		uiSize,
		class: _class
	}: MenuBarMenuItemProps = $props();
	const menuContext = getContext<MenuContextType>('menuContext');

	const menuContentContext = getContext<MenuContentContextType>('menuContentContext');

	const leftSpaced = $derived(menuContentContext.leftSpaced);

	$inspect({ leftSpaced });

	$effect(() => {
		if (iconLeft || leftSlot) {
			menuContentContext.leftSpaced = true;
		}
	});

	function handleKeyDown(e: KeyboardEvent) {
		const target = e.target as HTMLElement;
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();

			target.click();
		}
	}
	function handleClick(e: MouseEvent) {
		// e.preventDefault();
		// onclick();
		menuContext.close();
	}

	let el = $state('button');
	$effect(() => {
		if (href) {
			el = 'a';
		}
	});

	const style = tv({
		extend: baseVariant,
		base: `w-full inline-block ${menuItemTheme}`,
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
		onkeydown={(e: KeyboardEvent) => handleKeyDown(e)}
		onclick={(e: MouseEvent) => handleClick(e)}
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
