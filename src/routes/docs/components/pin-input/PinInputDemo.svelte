<script lang="ts">
	import { PinInputBox, PinInputControl, PinInputSeparator } from '$lib/ui/index.js';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';

	let value = $state(['', '', '', '', '', '', '', '']);
	const pin = $derived.by(() => value.join(''));
</script>

<div class=" ">
	<PinInputControl class=" gap-1" uiSize="md" uiRounded="sm">
		{#each [0, 1, 2, 3] as i}
			<PinInputBox bind:value={value[i]} />
		{/each}
		<PinInputSeparator />
		{#each [4, 5, 6, 7] as i}
			<PinInputBox bind:value={value[i]} />
		{/each}
	</PinInputControl>
</div>
