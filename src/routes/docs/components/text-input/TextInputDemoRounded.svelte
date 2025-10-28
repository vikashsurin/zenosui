<script lang="ts">
	import TextInput from '$lib/ui/textInput/TextInput.svelte';

	let val = $state();

	function handleClick(e) {
		e.stopPropagation();
		console.log('clicked');
	}
</script>

<div class="flex gap-3">
	<TextInput invalid={false} bind:value={val} uiSize="md" uiRounded="none" placeholder="none" />
	<TextInput invalid={false} bind:value={val} uiSize="md" uiRounded="sm" placeholder="sm" />
	<TextInput invalid={false} bind:value={val} uiSize="md" uiRounded="lg" placeholder="lg" />
	<TextInput invalid={false} bind:value={val} uiSize="md" uiRounded="full" placeholder="full" />
</div>
