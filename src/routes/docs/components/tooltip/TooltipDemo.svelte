<script lang="ts">
	import { Tooltip } from '$lib/ui/index.js';
	import CustomTooltip from './CustomTooltip.svelte';
</script>

<div class="p-10">
	<p>
		Simply,
		<Tooltip render={CustomTooltip} uiRounded="sm" uiSize="xs" delay={1000} class="bg-amber-300 ">
			<i class="bg-orange-300">hover me</i>
		</Tooltip>
	</p>
</div>
