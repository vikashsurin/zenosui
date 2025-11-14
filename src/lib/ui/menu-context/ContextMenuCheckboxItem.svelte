<script lang="ts">
	import { Icon } from '../icon/index.ts';
	import { baseVariant } from '$lib/style/base.js';
	import { menuItemTheme } from './theme.js';
	import { SIZE_PRESET } from '$lib/style/presets.js';
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';

	import Minus from '@lucide/svelte/icons/minus';
	import Check from '@lucide/svelte/icons/check';
	import { getContext } from 'svelte';
	import type { ContextMenuContextType } from './types.ts';
	let { children, checked = $bindable(), checkmark = Check, uiSize, class: _class } = $props();

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
	const id = crypto.randomUUID();

	function handleChange(event?: Event) {
		checked = event ? (event.target as HTMLInputElement).checked : !checked;
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
