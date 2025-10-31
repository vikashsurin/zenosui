<script lang="ts">
	import { Icon } from '../icon/index.ts';

	import Minus from '@lucide/svelte/icons/minus';
	import Check from '@lucide/svelte/icons/check';
	let { children, checked = $bindable(), checkmark = Check } = $props();

	let id = crypto.randomUUID();

	function handleChange(e) {
		checked = !checked;
	}

	function handlekeydown(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			handleChange(e);
		}
	}
</script>

<label for={id} class="flex w-max items-center gap-2 focus-within:ring-2">
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
