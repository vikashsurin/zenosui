<script lang="ts">
	import { Select, SelectList, SelectOption, SelectTrigger } from '$lib/ui/index.js';
</script>

<div>
	<Select uiSize="sm" uiRounded="xs">
		<SelectTrigger label="Select" />
		<SelectList>
			<SelectOption value="option1">Option this is long</SelectOption>
			<SelectOption value="option2">Option 2</SelectOption>
			<SelectOption value="option3">Option 3</SelectOption>
		</SelectList>
	</Select>
</div>
