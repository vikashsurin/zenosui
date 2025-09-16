<script lang="ts">
	import { Button } from '$lib/ui/index.js';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';

	import ChevronDown from '@lucide/svelte/icons/chevron-down';
</script>

<div class="">
	<h1>Sizes</h1>
	<div class="my-4">
		<Button uiRounded="sm" uiSize="xs" label="Button" />
		<Button uiRounded="sm" uiSize="sm" label="Button" />
		<Button uiRounded="sm" uiSize="md" label="Button" />
		<Button uiRounded="sm" uiSize="lg" label="Button" />
		<Button uiRounded="sm" uiSize="xl" label="Button" />
		<Button uiRounded="sm" uiSize="2xl" label="Button" />
		<Button uiRounded="sm" uiSize="3xl" label="Button" />
	</div>
	<Button uiVariant="primary" uiRounded="sm" label="Button" iconRight={ChevronRight} />

	<Button uiRounded="sm" onclick={() => console.log('Button clicked')} label="Button" />
	<Button
		uiRounded="sm"
		uiSize="xs"
		onclick={() => console.log('Button clicked')}
		label="Button"
		iconRight={ChevronRight}
	/>
	<hr class="my-6" />
	<Button
		uiRounded="xs"
		uiSize="xs"
		onclick={() => console.log('Button clicked')}
		label="Button"
		iconLeft={BadgeCheck}
		iconRight={BadgeCheck}
	/>
	<Button
		uiRounded="sm"
		uiSize="sm"
		onclick={() => console.log('Button clicked')}
		label="Button"
		iconLeft={BadgeCheck}
		iconRight={BadgeCheck}
	/>
	<Button iconLeft={ChevronDown} uiRounded="full" uiSize="sm">down</Button>
</div>
