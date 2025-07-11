<script>
	import { Icon, Button, IconButton } from '$lib/ui/index.js';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';

	function handleClick() {
		console.log('hello there');
	}
</script>

<div class="m-16">
	<Button rounded="sm" label="Button" onclick={handleClick} />

	<Button
		href="https://www.google.com"
		rounded="sm"
		onclick={() => console.log('Button clicked')}
		label="Button"
	/>
	<Button
		rounded="sm"
		size="xs"
		onclick={() => console.log('Button clicked')}
		label="Button"
		iconRight={ChevronRight}
	/>
	<hr class="my-6" />
	<Button
		rounded="xs"
		size="xs"
		onclick={() => console.log('Button clicked')}
		label="Button"
		iconLeft={BadgeCheck}
		iconRight={BadgeCheck}
	/>
	<Button
		rounded="sm"
		size="sm"
		onclick={() => console.log('Button clicked')}
		label="Button"
		iconLeft={BadgeCheck}
		iconRight={BadgeCheck}
	/>

	<div>
		<Icon size="xs" icon={BadgeCheck} />
	</div>
	<div>
		<IconButton size="sm" icon={BadgeCheck} />
	</div>
</div>
