<script lang="ts">
	import { Icon } from '../icon/index.ts';
	import { baseVariant } from '$lib/style/base.js';
	import { menuItemTheme } from './theme.js';
	import { SIZE_PRESET } from '$lib/style/presets.js';
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';

	import Check from '@lucide/svelte/icons/check';
	import Minus from '@lucide/svelte/icons/minus';
	import { getContext } from 'svelte';
	import type { DropdownMenuContextType } from './types.ts';
	import Page from '../../../routes/+page.svelte';
	let { children, checked = $bindable(), checkmark = Check, uiSize, class: _class } = $props();

	const style = tv({
		extend: baseVariant,
		base: `flex w-max items-center gap-2  ${menuItemTheme}`,
		variants: {
			uiSize: SIZE_PRESET
		}
	});

	const dropdownMenuContext = getContext<DropdownMenuContextType>('dropdownMenuContext');

	function closeMenu() {
		dropdownMenuContext.dropdownMenuState.close();
	}

	// Generate ID once on component initialization (constant, doesn't need to be reactive)
	const id = crypto.randomUUID();

	function handleChange() {
		checked = !checked;
		closeMenu();
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			handleChange();
		}
	}

	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));
</script>

<label for={id} class={finalClass}>
	{#if checkmark && checked}
		<Icon icon={checkmark} />
	{:else}
		<Icon icon={Minus} class="invisible" />
	{/if}
	<input
		data-menu-item
		role="menuitemcheckbox"
		{id}
		type="checkbox"
		{checked}
		onchange={handleChange}
		aria-checked={checked}
		onkeydown={handleKeyDown}
		class="sr-only"
	/>
	{@render children?.()}
</label>
