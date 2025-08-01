<script lang="ts">
	import { toastManager } from '$lib/ui/toast/toastManger.svelte.ts';

	import type { Toast } from '$lib/ui/toast/toastManger.svelte.ts';
	let count = 0;
	function addToast() {
		const toast: Toast = {
			message: 'newtoast this is a long text  and this is even longer..' + count,
			duration: 6000,
			styleClass:
				'bg-blue-100 text-blue-600  text-sm w-[200px] border border-blue-400/50 shadow-inherit shadow-lg'
		};
		toastManager.createToast(toast).position('center').maxToasts(5);
		count++;
	}
</script>

<div></div>

<button onclick={addToast} class="bg-amber-500 p-2">create Toast</button>
