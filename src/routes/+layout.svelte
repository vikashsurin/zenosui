<script lang="ts">
	import '../app.css';
	import Aside from './Aside.svelte';
	let { children } = $props();
</script>

<div class="grid grid-cols-12">
	<div class="col-span-2">
		<Aside />
	</div>
	<div class="col-span-8 p-8">
		{@render children()}
	</div>
</div>
