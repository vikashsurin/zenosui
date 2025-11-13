<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { menuItemTheme } from './theme.js';
	import clsx from 'clsx';
	import { SIZE_PRESET } from '$lib/style/presets.js';
	import { baseVariant } from '$lib/style/base.js';
	import { getContext } from 'svelte';
	import type { DropdownMenuContentContextType } from './types.ts';
	import { Icon } from '../icon/index.ts';
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
	} = $props();

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

	$inspect({ leftSpaced });

	function handleKeyDown(e: KeyboardEvent) {
		const target = e.target as HTMLElement;
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			console.log('from menu item');
			target.click();
		}
	}
	function handleClick(e: MouseEvent) {
		// e.preventDefault();
		// onclick();

		console.log('clicked');
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
