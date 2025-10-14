<script lang="ts">
	import { PinInputBox, PinInputControl, PinInputSeparator } from '$lib/ui/index.js';

	let value = $state(['', '', '', '', '', '', '', '']);
	const pin = $derived.by(() => value.join(''));
</script>

<div class=" w-[500px] items-center flex justify-center bg-amber-500">
	<form action="POST">
		<PinInputControl class="flex gap-2 bg-green-300" uiSize="md" uiRounded="sm">
			{#each [0, 1, 2, 3] as i}
				<PinInputBox bind:value={value[i]} />
			{/each}
			<PinInputSeparator />
			{#each [4, 5, 6, 7] as i}
				<PinInputBox bind:value={value[i]} />
			{/each}
		</PinInputControl>
	</form>
</div>
