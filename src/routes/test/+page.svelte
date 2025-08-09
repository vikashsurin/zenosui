<script lang="ts">
	let n = 360;
</script>

<div>
	<a href="https://www.google.com" class="bg-red-400">hello</a>
</div>

<div class="flex flex-wrap p-2">
	{#each Array(n) as _, i}
		<div class="cont" style={`--bg: oklch(.5 .25 ${i}`}>
			<p class="p-8 text-white">AAA {i + 1}</p>
		</div>
	{/each}
</div>

<style>
	.cont {
		width: 100px;
		background-color: var(--bg);
	}
</style>
