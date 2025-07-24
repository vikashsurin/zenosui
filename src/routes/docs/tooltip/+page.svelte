<script lang="ts">
	import { Tooltip } from '$lib/ui/index.js';
</script>

<div class="p-10">
	<h1>Tooltip</h1>
	<Tooltip
		uiRounded="sm"
		uiSize="3xl"
		content="How are you doing?"
		class="border border-gray-300/60"
	>
		<p class="bg-red-500 p-3">helo there</p>
	</Tooltip>
</div>
