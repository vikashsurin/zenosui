<script lang="ts">
	import {
		AlertActionButton,
		AlertContent,
		Alert,
		AlertFooter,
		AlertHeader,
		AlertTitle
	} from '$lib/ui/index.js';

	let open = $state(false);
</script>

<div>
	<button class="rounded-md bg-gray-200 px-3 py-2" onclick={() => (open = true)}>show alert</button>
	<Alert bind:open>
		<AlertHeader>
			<AlertTitle>Title</AlertTitle>
		</AlertHeader>
		<AlertContent>hello world</AlertContent>
		<AlertFooter>
			<AlertActionButton>OK</AlertActionButton>
		</AlertFooter>
	</Alert>
</div>
