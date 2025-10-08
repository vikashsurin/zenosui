<!-- <script lang="ts">
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
      <span class="code-line" style="display: block;">
        <span class="line-number" style="display: inline-block; width: 3em; text-align: right; margin-right: 1em; user-select: none; opacity: 0.5;">${i + 1}</span><span style="white-space: pre;">${line}</span>
      </span>
    `
			)
			.join('');
		code = html;
	});
</script>

<div class="flex flex-col border border-gray-200 p-4">
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
			<pre style="font-family: monospace; white-space: pre; overflow-x: auto;">
			<code>
				{@html value}
			</code>
			</pre>
		{:catch error}
			<p>{error}</p>
		{/await}
	{/if}
</div> -->
<script lang="ts">
	import Highlight from 'svelte-highlight';
	import { typescript } from 'svelte-highlight/languages';
	// let { source, Component } = $props();

	// const code = $derived(source);
	const code = 'const add = (a: number, b: number) => a + b;';
</script>

<Highlight language={typescript} {code} />
