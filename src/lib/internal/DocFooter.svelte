<script lang="ts">
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	let { prev, next } = $props();
</script>

<div class="flex justify-between">
	<a
		href={prev}
		class="flex items-center gap-2 bg-gray-200 p-2 hover:bg-gray-100 active:bg-gray-300"
	>
		<ArrowLeft size="16" />
		Previous</a
	>

	<a
		href={next}
		class=" flex items-center gap-2 bg-gray-200 p-2 hover:bg-gray-100 active:bg-gray-300"
		>Next <ArrowRight size="16" /></a
	>
</div>
