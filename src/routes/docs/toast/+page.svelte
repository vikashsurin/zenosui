<script lang="ts">
	import { toast } from '$lib/utils/utils.js';

	function push() {
		toast.warning('new toast');
	}
</script>

<div></div>

<button onclick={push}>Add toast</button>
