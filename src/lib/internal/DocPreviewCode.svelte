<script lang="ts">
	import Highlight, { LineNumbers } from 'svelte-highlight';
	import { typescript } from 'svelte-highlight/languages';
	import a11yLight from 'svelte-highlight/styles/a11y-light';
	let { source, Component } = $props();
	import Clipboard from '@lucide/svelte/icons/clipboard';
	import Check from '@lucide/svelte/icons/check';
	import { Tooltip } from '$lib/ui/index.js';

	let isPreview = $state(true);
	let isCopied = $state(false);
	let timeoutID;

	function showPreview() {
		isPreview = true;
	}

	function showCode() {
		isPreview = false;
	}
	const code = source;
	function handleClick() {
		navigator.clipboard.writeText(code);
		isCopied = true;

		if (timeoutID) {
			clearTimeout(timeoutID);
		}
		timeoutID = setTimeout(() => {
			console.log('copied');
			isCopied = false;
		}, 3000);
	}
</script>

<svelte:head>
	{@html a11yLight}
</svelte:head>

<div class="border border-gray-300 p-10">
	<div>
		<button class:dimmed={!isPreview} onclick={showPreview}>Preview</button>
		<button class:dimmed={isPreview} onclick={showCode}>Code</button>
	</div>
	<div class="">
		{#if isPreview}
			<Component />
		{:else}
			<div class="flex justify-between">
				<span></span>
				<button class="opacity-50" onclick={handleClick}>
					{#if isCopied}
						<Tooltip content="Copied" uiRounded="sm" uiSize="xs">
							<Check />
						</Tooltip>
					{:else}
						<Tooltip content="Copy to clipboard" uiRounded="sm" uiSize="xs">
							<Clipboard />
						</Tooltip>
					{/if}
				</button>
			</div>
			<Highlight language={typescript} {code} let:highlighted>
				<LineNumbers {highlighted} hideBorder />
			</Highlight>
		{/if}
	</div>
</div>

<style>
	.dimmed {
		opacity: 0.5;
	}
</style>
