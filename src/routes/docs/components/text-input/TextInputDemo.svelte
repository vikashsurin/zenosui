<script lang="ts">
	import TextInput from '$lib/ui/textInput/TextInput.svelte';

	let val = $state();
</script>

<div class="flex flex-col gap-3">
	<TextInput invalid={false} bind:value={val} uiSize="md" uiRounded="none" placeholder="Email" />
</div>
