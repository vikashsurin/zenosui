<script lang="ts">
	import { Calender, DateInput } from '$lib/ui/index.js';
	let date = $state(new Date());
</script>

<div>
	<DateInput bind:date uiSize="md" uiRounded="xl">
		<Calender bind:date />
	</DateInput>
</div>

<style>
</style>
