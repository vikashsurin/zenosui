<script lang="ts">
	import { getContext } from 'svelte';
	import { type ContextMenuContextType, type MenuRadioGroupContextType } from './types.ts';
	import { Icon } from '../icon/index.ts';
	import Check from '@lucide/svelte/icons/check';

	import Minus from '@lucide/svelte/icons/minus';
	import { baseVariant } from '$lib/style/base.js';
	import { menuItemTheme } from './theme.js';
	import { SIZE_PRESET } from '$lib/style/presets.js';
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';

	let { children, value, checkmark = Check, uiSize, class: _class } = $props();
	const id = crypto.randomUUID();

	const style = tv({
		extend: baseVariant,
		base: `flex w-max items-center gap-2  ${menuItemTheme}`,
		variants: {
			uiSize: SIZE_PRESET
		}
	});
	const contextMenuContext = getContext<ContextMenuContextType>('contextMenuContext');

	function closeMenu() {
		contextMenuContext.ContextMenuState.close();
	}

	const radioGroupContext = getContext<MenuRadioGroupContextType>('menuRadioGroupContext');

	const isChecked = $derived(value === radioGroupContext.radioGroupState.value);

	const name = $derived(radioGroupContext.radioGroupState.name || 'menu-radio-item');

	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		radioGroupContext.radioGroupState.value = target.value;
		closeMenu();
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			radioGroupContext.radioGroupState.value = value;
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
