<script lang="ts">
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	let { title, description } = $props();
</script>

<div class="p-4">
	<div class="flex justify-between">
		<h1 class="text-3xl font-bold">{title}</h1>
		<div>
			<button class="bg-gray-200 p-2 hover:bg-gray-100 active:bg-gray-300"
				><ArrowLeft size="16" />
			</button>
			<button class="bg-gray-200 p-2 hover:bg-gray-100 active:bg-gray-300"
				><ArrowRight size="16" />
			</button>
		</div>
	</div>
	<p class="py-4">{description}</p>
</div>
