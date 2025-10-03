<script lang="ts">
	import { Tooltip } from '$lib/ui/index.js';
</script>

<div class="p-10">
	<h1>Tooltip</h1>
	<p>
		This is a tooltip. It is used to display information about an element when the user hovers over
		it.

		<Tooltip
			content="How are you doing?"
			uiSize="xs"
			uiRounded="md"
			class="border border-amber-600/60 bg-amber-200 text-amber-600 shadow-amber-500/20"
		>
			<i class="bg-orange-300">hover me</i>
		</Tooltip>
	</p>
</div>
