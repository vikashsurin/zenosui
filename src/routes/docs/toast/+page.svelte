<script lang="ts">
	import { toastManager } from '$lib/index.js';

	import type { Toast } from '$lib/ui/toast/toastManager.svelte.js';
	let count = 0;
	function addToast() {
		const toast: Toast = {
			message: 'newtoast this is a long text  and this is even longer..' + count,
			duration: 5000,
			styleClass:
				'bg-rose-100 text-rose-600  text-sm w-[200px] border border-rose-400/20 shadow-inherit shadow-lg'
		};
		toastManager.createToast(toast).position('bottom-right').maxToasts(3);
		count++;
	}
</script>

<div></div>

<button onclick={addToast} class="bg-amber-500 p-2">create Toast</button>
