<script lang="ts">
	import DialogHeader from '$lib/ui/dialog/DialogHeader.svelte';
	import {
		Dialog,
		CloseDialogButton,
		DialogFooter,
		DialogContent,
		ActionDialogButton
	} from '$lib/ui/index.js';
	let open = $state(false);
</script>

<div>
	<button class="rounded-sm bg-gray-200 px-3 py-2" onclick={() => (open = true)}
		>Trigger dialog</button
	>

	<Dialog bind:open class="" backdrop>
		<DialogHeader>
			<h1>Title</h1>
		</DialogHeader>
		<DialogContent>
			<p>This is a modular Dialog Box.</p>
			<p>Add any element that are needed, for ex- forms</p>
		</DialogContent>
		<DialogFooter>
			<CloseDialogButton>Cancel</CloseDialogButton>
			<ActionDialogButton>Submit</ActionDialogButton>
		</DialogFooter>
	</Dialog>
</div>
