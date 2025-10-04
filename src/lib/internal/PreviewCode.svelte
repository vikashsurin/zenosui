<script lang="ts">
	import { onMount } from 'svelte';
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

	let code = $state();
	onMount(async () => {
		let html = await shikiCode(source);

		const lines = html
			.replace(/<pre[^>]*><code[^>]*>|<\/code><\/pre>/g, '')
			.split('\n')
			.filter((line) => line.length > 0);

		html = lines
			.map(
				(line, i) => `
      <div class="code-line">
        <span style="pointer-events: none; opacity: 0.5;" class="line-number px-8 disabled" disabled>${i + 1}</span>${line}
      </div>
    `
			)
			.join('');

		code = html;
	});
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
