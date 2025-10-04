<script lang="ts">
	import '../app.css';
	import Aside from './Aside.svelte';
	import DocFooter from '$lib/internal/DocFooter.svelte';

	let { children } = $props();
	$effect(() => {
		document.documentElement.setAttribute('data-theme', 'light');
	});
</script>

<div class="grid h-screen grid-cols-12">
	<Aside />
	<div class="col-span-8 p-8">
		{@render children()}

		<DocFooter />
	</div>
	<div class="col-span-2 bg-gray-100"></div>
</div>
