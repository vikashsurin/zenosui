<script lang="ts">
	type Props = {
		children?: () => any;
		text?: string;
	};
	let { children, text }: Props = $props();
</script>

<div class="doc-layout-box parent m-1 border border-dashed border-gray-400 bg-white p-5">
	<span class="m-1">{text}</span>

	{@render children?.()}
</div>

<style>
	.doc-layout-box:hover:not(:has(*:hover)) {
		/* Your hover styles here */
		/* Example: */
		background: oklch(90% 0 0);
	}
</style>
