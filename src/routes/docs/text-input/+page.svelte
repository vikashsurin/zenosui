<script lang="ts">
	import TextInput from '$lib/ui/textInput/TextInput.svelte';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	let kal = $state();
</script>

<div>
	<TextInput
		invalid={false}
		bind:value={kal}
		uiSize="md"
		uiRounded="full"
		iconLeft={BadgeCheck}
		iconRight={BadgeCheck}
	/>
</div>
