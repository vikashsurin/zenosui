<script lang="ts">
	import {
		AlertActionButton,
		AlertContent,
		Alert,
		AlertFooter,
		AlertHeader,
		AlertTitle
	} from '$lib/ui/index.js';

	let open = $state(true);
</script>

<div>
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
