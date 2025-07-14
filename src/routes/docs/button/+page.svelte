<script lang="ts">
	import { Button } from '$lib/ui/index.js';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	const handleClick = () => console.log('Button clicked');
</script>

<div class="">
	<Button roundedVariant="sm" label="Button" onclick={handleClick} disabled />

	<Button
		href="https://www.google.com"
		roundedVariant="sm"
		onclick={() => console.log('Button clicked')}
		label="Button"
	/>
	<Button
		roundedVariant="sm"
		sizeVariant="xs"
		onclick={() => console.log('Button clicked')}
		label="Button"
		iconRight={ChevronRight}
	/>
	<hr class="my-6" />
	<Button
		roundedVariant="xs"
		sizeVariant="xs"
		onclick={() => console.log('Button clicked')}
		label="Button"
		iconLeft={BadgeCheck}
		iconRight={BadgeCheck}
	/>
	<Button
		roundedVariant="sm"
		sizeVariant="sm"
		onclick={() => console.log('Button clicked')}
		label="Button"
		iconLeft={BadgeCheck}
		iconRight={BadgeCheck}
	/>
</div>
