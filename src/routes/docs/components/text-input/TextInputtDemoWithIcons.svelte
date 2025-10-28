<script lang="ts">
	import IconButton from '$lib/ui/button/IconButton.svelte';
	import Icon from '$lib/ui/icon/Icon.svelte';
	import TextInput from '$lib/ui/textInput/TextInput.svelte';
	import Info from '@lucide/svelte/icons/info';
	import X from '@lucide/svelte/icons/x';
	import CircleCheck from '@lucide/svelte/icons/circle-check';

	let val = $state();

	function clearInput() {
		val = '';
	}
	$inspect({ val });
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
			<Icon
				icon={CircleCheck}
				uiSize="xl"
				uiRounded="full"
				class="m-1 bg-transparent text-green-600 hover:bg-transparent "
			/>
		{/snippet}
	</TextInput>
</div>
