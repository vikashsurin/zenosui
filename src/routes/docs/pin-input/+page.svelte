<script lang="ts">
	import { PinInputBox, PinInputControl } from '$lib/ui/index.js';

	let value = $state(['', '', '', '']);
	const pin = $derived.by(() => value.join(''));
	$inspect({ pin });
</script>

<div>
	<h1>Pin Input</h1>
	<form action="POST">
		<PinInputControl class="gap-2" uiSize="md" uiRounded="sm">
			{#each [0, 1, 2, 3] as i}
				<PinInputBox bind:value={value[i]} />
			{/each}
		</PinInputControl>
		<button>submit</button>
	</form>
</div>
