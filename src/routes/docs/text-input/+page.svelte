<script lang="ts">
	import TextInput from '$lib/ui/textInput/TextInput.svelte';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	let kal = $state();
</script>

<div>
	<TextInput
		invalid={false}
		bind:value={kal}
		uiSize="sm"
		uiRounded="sm"
		iconLeft={BadgeCheck}
		iconRight={BadgeCheck}
		class="focus:outline-2 focus:outline-red-500"
	/>
</div>
