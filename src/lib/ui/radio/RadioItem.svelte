<script lang="ts">
	let { children, ...props }: any = $props();
</script>

<label {...props}>
	{@render children?.()}
</label>
