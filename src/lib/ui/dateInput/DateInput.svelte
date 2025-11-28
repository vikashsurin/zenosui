<script lang="ts">
	import type { RoundedVariant, SizeVariant } from '$lib/types/index.js';
	import { clickOutside } from '$lib/utils/index.js';
	import Input from '../_primitives/Input.svelte';

	let {
		children,
		uiSize = 'xs' as SizeVariant,
		date = $bindable(),
		uiRounded = 'sm' as RoundedVariant
	} = $props();

	let inputState = $state({
		open: false
	});
	function handleClick(e: MouseEvent) {
		console.log('clicked');
		e.preventDefault();
		inputState.open = !inputState.open;
	}
	function onClickOutside() {
		inputState.open = false;
	}
	function convertDate() {
		return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
	}
</script>

<div class="relative grid w-max items-center justify-center" use:clickOutside={onClickOutside}>
	<Input
		name="date"
		type="date"
		{uiSize}
		{uiRounded}
		class="border border-gray-200"
		value={convertDate()}
		onclick={(e: MouseEvent) => handleClick(e)}
	/>

	{#if inputState.open}
		<div class="absolute top-[100%]">
			{@render children?.()}
		</div>
	{/if}
</div>
