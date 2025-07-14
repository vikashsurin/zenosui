<script lang="ts">
	import {
		AlertActionButton,
		AlertContent,
		AlertDialog,
		AlertFooter,
		AlertHeader,
		AlertTitle
	} from '$lib/ui/index.js';
	let open = $state(true);
</script>

<div>
	<AlertDialog bind:open>
		<AlertHeader>
			<AlertTitle>Title</AlertTitle>
		</AlertHeader>
		<AlertContent>hello world</AlertContent>
		<AlertFooter>
			<AlertActionButton>OK</AlertActionButton>
		</AlertFooter>
	</AlertDialog>
</div>
