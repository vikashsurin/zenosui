<script lang="ts">
	import { getContext } from 'svelte';
	import {
		type MenuContentContextType,
		type MenuContextType,
		type MenuRadioGroupContextType
	} from './types.ts';
	import { Icon } from '../icon/index.ts';
	import Check from '@lucide/svelte/icons/check';
	import { baseVariant } from '$lib/style/base.js';
	import { menuItemTheme } from './theme.js';
	import { SIZE_PRESET } from '$lib/style/presets.js';
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { MenubarRadioItemProps } from '$lib/types/index.ts';
	import Minus from '@lucide/svelte/icons/minus';

	let {
		children,
		value,
		checkmark = Check,
		uiSize,
		class: _class
	}: MenubarRadioItemProps = $props();

	// Generate ID once on component initialization (constant, doesn't need to be reactive)
	const id = crypto.randomUUID();

	const menuContext = getContext<MenuContextType>('menuContext');

	function closeMenu() {
		menuContext.close();
	}

	const menuContentContext = getContext<MenuContentContextType>('menuContentContext');

	// Set leftSpaced when component mounts if context exists
	$effect(() => {
		if (menuContentContext) {
			menuContentContext.leftSpaced = true;
		}
	});

	const style = tv({
		extend: baseVariant,
		base: `flex w-max items-center gap-2  ${menuItemTheme}`,
		variants: {
			uiSize: SIZE_PRESET
		}
	});

	const radioGroupContext = getContext<MenuRadioGroupContextType>('menuRadioGroupContext');

	const isChecked = $derived(value === radioGroupContext.radioGroupState.value);
	const name = $derived(radioGroupContext.radioGroupState.name || 'menu-radio-item');

	function handleChange(e: Event) {
		const target = e.target as HTMLInputElement;
		radioGroupContext.radioGroupState.setValue(target.value);
		closeMenu();
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			// Set the value directly through the radio group context
			radioGroupContext.radioGroupState.setValue(value);
		}
	}

	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));
</script>

<label for={id} class={finalClass}>
	{#if checkmark && isChecked}
		<Icon icon={checkmark} />
	{:else}
		<Icon icon={Minus} class="invisible" />
	{/if}
	<input
		data-menu-item
		role="menuitemradio"
		{id}
		type="radio"
		{name}
		{value}
		onchange={handleChange}
		checked={isChecked}
		aria-checked={isChecked}
		onkeydown={handleKeyDown}
		class="sr-only"
	/>
	{@render children?.()}
</label>
