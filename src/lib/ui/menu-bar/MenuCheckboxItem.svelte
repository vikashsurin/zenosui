<script lang="ts">
	import { Icon } from '../icon/index.ts';
	import { baseVariant } from '$lib/style/base.js';
	import { menuItemTheme } from './theme.js';
	import { SIZE_PRESET } from '$lib/style/presets.js';
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';

	import Minus from '@lucide/svelte/icons/minus';
	import Check from '@lucide/svelte/icons/check';
	import type { MenuBarCheckboxItemProps } from '$lib/types/index.ts';
	let {
		children,
		checked = $bindable(),
		checkmark = Check,
		uiSize,
		class: _class
	}: MenuBarCheckboxItemProps = $props();

	const style = tv({
		extend: baseVariant,
		base: `flex w-max items-center gap-2  ${menuItemTheme}`,
		variants: {
			uiSize: SIZE_PRESET
		}
	});

	let id = crypto.randomUUID();

	function handleChange(e) {
		checked = !checked;
	}

	function handlekeydown(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			handleChange(e);
		}
	}

	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));
</script>

<label for={id} class={finalClass}>
	{#if checkmark && checked}
		<Icon icon={checkmark} />
	{:else}
		<Icon icon={Minus} class="opacity-0" />
	{/if}
	<input
		data-menu-item
		role="menuitemcheckbox"
		{id}
		type="checkbox"
		{checked}
		onchange={(e) => handleChange(e)}
		aria-checked={checked}
		onkeydown={(e) => handlekeydown(e)}
		class="sr-only"
	/>
	{@render children?.()}
</label>
