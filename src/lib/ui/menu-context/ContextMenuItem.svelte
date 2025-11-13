<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { menuItemTheme } from './theme.js';
	import clsx from 'clsx';
	import { SIZE_PRESET } from '$lib/style/presets.js';
	import { baseVariant } from '$lib/style/base.js';
	import { getContext } from 'svelte';
	import type { ContextMenuContentContextType, ContextMenuContextType } from './types.ts';
	import { Icon } from '../icon/index.ts';

	let {
		children,
		href,
		onclick,
		uiSize,
		class: _class,
		iconLeft,
		leftSlot,
		iconRight,
		rightSlot,
		...props
	} = $props();

	const contextMenuContext = getContext<ContextMenuContextType>('contextMenuContext');

	const contextMenuContentContext = getContext<ContextMenuContentContextType>(
		'contextMenuContentContext'
	);
	const leftSpaced = $derived(contextMenuContentContext.leftSpaced);

	$inspect({ leftSpaced });

	$effect(() => {
		if (iconLeft || leftSlot) {
			contextMenuContentContext.leftSpaced = true;
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
		const target = e.target as HTMLElement;
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			console.log('from menu item');
			target.click();
		}
	}

	function closeMenu() {
		contextMenuContext.ContextMenuState.close();
	}

	function handleClick(e: MouseEvent) {
		closeMenu();
	}

	let el = $state('button');

	$effect(() => {
		if (href) {
			el = 'a';
		}
	});

	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));
</script>

<li role="none">
	<svelte:element
		this={el}
		data-menu-item
		{...el === 'a' && href ? { href } : {}}
		role="menuitem"
		onkeydown={(e: KeyboardEvent) => handleKeyDown(e)}
		class={finalClass}
		onclick={(e) => {
			onclick?.(e);
			handleClick(e);
		}}
		{...props}
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

<!-- onclick={(e: MouseEvent) => handleClick(e)} -->
