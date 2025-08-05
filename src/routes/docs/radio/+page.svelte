<script lang="ts">
	import { enhance } from '$app/forms';
	import { Radio, RadioGroup } from '$lib/ui/index.js';
</script>

<div>
	<h1 class="text-lg">Radio</h1>
	<form action="?/submit" method="POST">
		<RadioGroup uiSize="xs">
			<label>
				<Radio name="fruit" value="apple" class="bg-green-500" />
				Apples
			</label>
			<label>
				<Radio name="fruit" value="orange" class="bg-green-500" />
				orange
			</label>
		</RadioGroup>
		<button class="block bg-blue-500 p-2 px-3 text-white">submit</button>
	</form>
</div>
