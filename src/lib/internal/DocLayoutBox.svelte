<script lang="ts">
	let { layout } = $props();
	import Self from './DocLayoutBox.svelte';
</script>

{#if layout?.component}
	<div class="doc-layout-box m-2 border border-dashed border-gray-300 bg-white p-4">
		<div>
			{layout.component}
		</div>

		{#if layout.children && layout.children.length > 0}
			{#each layout.children as child}
				<Self layout={child} />
			{/each}
		{/if}
	</div>
{/if}

<style>
	.doc-layout-box:hover:not(:has(.doc-layout-box:hover)) {
		background: oklch(92% 0 0);
	}
</style>
