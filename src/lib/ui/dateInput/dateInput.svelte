<script lang="ts">
	import type { RoundedVariant, SizeVariant } from '$lib/types/index.js';
	import { clickOutside } from '$lib/utils/index.js';
	import Input from '../atoms/Input.svelte';
	import Calender from './Calender.svelte';

	let { uiSize = 'xs' as SizeVariant, uiRounded = 'sm' as RoundedVariant } = $props();
	let date = $state(new Date());

	let inputState = $state({
		open: false
	});
	function handleClick(e: MouseEvent) {
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

<div class="grid w-max items-center justify-center" use:clickOutside={onClickOutside}>
	<Input
		type="date"
		{uiSize}
		{uiRounded}
		class="border border-gray-200"
		value={convertDate()}
		onclick={(e: MouseEvent) => handleClick(e)}
	/>

	{#if inputState.open}
		<div class="mt-2">
			<Calender bind:date />
		</div>
	{/if}
</div>
