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
	<button class="rounded-sm px-3 py-2" onclick={() => (open = true)}>Trigger dialog</button>

	<Dialog bind:open class="border border-gray-800" uiRounded="lg" backdrop>
		<DialogHeader>
			<h1>Title</h1>
		</DialogHeader>
		<DialogContent>
			<p>This is a modular Dialog Box.</p>
			<p>Add any element that are needed, for ex- forms</p>
		</DialogContent>
		<DialogFooter>
			<CloseDialogButton uiSize="sm" uiColor="danger">Cancel</CloseDialogButton>
			<ActionDialogButton
				uiRounded="full"
				class="bg-amber-500 hover:bg-amber-400 active:bg-amber-600"
				uiSize="sm">Submit</ActionDialogButton
			>
		</DialogFooter>
	</Dialog>
</div>
