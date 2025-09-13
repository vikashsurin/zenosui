<script lang="ts">
	import type { RoundedVariant, SizeVariant } from '$lib/types/index.ts';
	import { clickOutside } from '$lib/utils/utils.ts';
	import Input from '../atoms/Input.svelte';
	import Calender from './Calender.svelte';

	let { uiSize = 'xs' as SizeVariant, uiRounded = 'sm' as RoundedVariant } = $props();
	let d = $state(new Date());
	$inspect({ d: d.toISOString().split('T') });

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
</script>

<div class="grid w-max items-center justify-center" use:clickOutside={onClickOutside}>
	<Input
		type="date"
		{uiSize}
		{uiRounded}
		class="border border-gray-200"
		value={d.toISOString().split('T')[0]}
		onclick={(e: MouseEvent) => handleClick(e)}
	/>

	{#if inputState.open}
		<div class="mt-2">
			<Calender bind:d />
		</div>
	{/if}
</div>
