<script lang="ts">
	import DialogHeader from '$lib/ui/dialog/DialogHeader.svelte';
	import {
		Dialog,
		CloseDialogButton,
		DialogFooter,
		DialogContent,
		ActionDialogButton
	} from '$lib/ui/index.js';
	let open = $state(true);
</script>

<div>
	<Dialog bind:open class="bg-red-600" backdrop>
		<DialogHeader>
			<h1>Title</h1>
		</DialogHeader>
		<DialogContent>
			<p>This is a modular Dialog Box.</p>
			<p>Add any element that are needed, for ex- forms</p>
		</DialogContent>
		<DialogFooter>
			<CloseDialogButton>cancel</CloseDialogButton>
			<ActionDialogButton>Submit</ActionDialogButton>
		</DialogFooter>
	</Dialog>
</div>
