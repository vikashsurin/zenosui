<script lang="ts">
	import TextInput from '$lib/ui/textInput/TextInput.svelte';
	import { Button } from '$lib/index.js';
	import IconButton from '$lib/ui/button/IconButton.svelte';
	import Info from '@lucide/svelte/icons/info';
	import X from '@lucide/svelte/icons/x';

	let val = $state();

	function clearInput() {
		val = '';
	}
</script>

<div>
	<TextInput invalid={false} bind:value={val} uiSize="md" uiRounded="full" placeholder="Email">
		{#snippet leftSlot()}
			<IconButton
				uiSize="md"
				icon={Info}
				uiRounded="full"
				class="bg-transparent hover:bg-gray-800"
			/>
		{/snippet}

		{#snippet rightSlot()}
			<IconButton
				icon={X}
				uiSize="sm"
				uiRounded="full"
				onclick={clearInput}
				class=" bg-transparent"
			/>
			<Button
				uiSize="sm"
				uiColor="primary"
				uiRounded="full"
				label="save"
				class="bg-amber-500 hover:bg-amber-400 active:bg-amber-600"
			/>
		{/snippet}
	</TextInput>
</div>
