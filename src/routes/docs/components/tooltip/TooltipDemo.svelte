<script lang="ts">
	import { Tooltip } from '$lib/ui/index.js';
	import CustomTooltip from './CustomTooltip.svelte';
</script>

<div class="p-10">
	<p>
		Simply,
		<Tooltip render={CustomTooltip} uiRounded="sm" uiSize="xs" class=" ">
			<i class="">hover me</i>
		</Tooltip>
	</p>
</div>
