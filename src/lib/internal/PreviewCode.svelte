<script lang="ts">
	import { shikiCode } from './shikiCode.js';

	let { source, Component } = $props();
	let preview = $state(true);

	function togglePreview() {
		preview = true;
	}

	function toggleCode() {
		preview = false;
	}
	$inspect({ preview });
	let code = shikiCode(source);
</script>

<div class="flex flex-col gap-2 border border-gray-200 p-4">
	<div class="flex gap-2">
		<button onclick={togglePreview} style={`opacity: ${preview ? 1 : 0.5};`}>Preview</button>
		<button onclick={toggleCode} style={`opacity: ${preview ? 0.5 : 1};`}>Code</button>
	</div>
	{#if preview}
		<Component />
	{:else}
		{#await code}
			<p>loading..</p>
		{:then value}
			{@html value}
		{:catch error}
			<p>{error}</p>
		{/await}
	{/if}
</div>
