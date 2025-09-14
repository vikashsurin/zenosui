<script lang="ts">
	import { snackbarManager } from '$lib/index.js';

	import type { Snackbar } from '$lib/ui/snackbar/types.ts';
	let count = 0;
	function addSnackbar() {
		const snackbar: Snackbar = {
			message: 'just a snackbar' + count,
			duration: 5000,
			styleClass:
				'bg-rose-100 text-rose-600  text-sm w-[300px] border border-rose-400/20 shadow-inherit shadow-lg',
			action: {
				name: 'UNDO',
				callback: undo
			}
		};
		snackbarManager.createSnackbar(snackbar).position('top-right').maxSnackbars(3);

		count++;
	}

	function undo() {
		console.log('undo undo');
	}
</script>

<div></div>

<button onclick={addSnackbar} class="bg-amber-500 p-2">create Snackbar</button>
