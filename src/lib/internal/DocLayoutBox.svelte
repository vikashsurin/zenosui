<script lang="ts">
	let { layout } = $props();
	import Self from './DocLayoutBox.svelte';
</script>

{#if layout?.component}
	<div class="doc-layout-box m-2 p-4">
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
	.doc-layout-box {
		color: var(--theme-foreground);
		background-color: var(--theme-background);
		border: 1px dashed var(--theme-border);
	}
	.doc-layout-box:hover:not(:has(.doc-layout-box:hover)) {
		background-color: var(--theme-background-200);
	}
</style>
