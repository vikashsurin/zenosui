<script lang="ts">
	import { getContext } from 'svelte';
	import { type MenuRadioGroupContextType } from './types.ts';
	import { Icon } from '../icon/index.ts';
	import Check from '@lucide/svelte/icons/check';

	import Minus from '@lucide/svelte/icons/minus';
	let { children, value, checkmark = Check } = $props();
	let id = crypto.randomUUID();

	const radioGroupContext = getContext<MenuRadioGroupContextType>('menuRadioGroupContext');

	function handleChange(e) {
		const value = e.target.value;
		radioGroupContext.radioGroupState.setValue(value);
		console.log('changed');
	}

	function isChecked() {
		return value === radioGroupContext.radioGroupState.value;
	}

	function setName() {
		if (radioGroupContext.radioGroupState.name) {
			return radioGroupContext.radioGroupState.name;
		} else {
			return 'menu-radio-item';
		}
	}

	function handlekeydown(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			handleChange(e);
		}
	}
</script>

<label for={id} class="flex w-max items-center gap-2 focus-within:ring-2">
	{#if checkmark && isChecked()}
		<Icon icon={checkmark} />
	{:else}
		<Icon icon={Minus} class="opacity-0" />
	{/if}
	<input
		data-menu-item
		role="menuitemradio"
		{id}
		type="radio"
		name={setName()}
		{value}
		onchange={(e) => handleChange(e)}
		checked={isChecked()}
		aria-checked={isChecked()}
		onkeydown={(e) => handlekeydown(e)}
		class="sr-only"
	/>
	{@render children?.()}
</label>
