<script lang="ts">
	import Button from '$lib/ui/button/Button.svelte';
	import { Tooltip } from '$lib/ui/index.js';
</script>

<div class="p-10">
	<h1>Tooltip</h1>
	<Tooltip
		content="How are you doing?"
		uiSize="xs"
		uiRounded="md"
		class="border border-amber-600/60 bg-amber-200 text-amber-600 shadow-amber-500/20"
	>
		<Button label="hover me">DemoButton</Button>
	</Tooltip>
</div>
