<script lang="ts">
	let { children } = $props();
</script>

<li role="none">
	<button role="menuitem" class="focus:ring-2">
		{@render children?.()}
	</button>
</li>
