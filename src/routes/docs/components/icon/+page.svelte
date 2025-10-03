<script lang="ts">
	import { Icon } from '$lib/ui/index.js';

	import BadgeCheck from '@lucide/svelte/icons/badge-check';
</script>

<div>
	<h1>Size</h1>
	<div class="flex items-center gap-2">
		<Icon icon={BadgeCheck} uiSize="xs" />
		<Icon icon={BadgeCheck} uiSize="sm" />
		<Icon icon={BadgeCheck} uiSize="md" />
		<Icon icon={BadgeCheck} uiSize="lg" />
		<Icon icon={BadgeCheck} uiSize="xl" />
		<Icon icon={BadgeCheck} uiSize="2xl" />
		<Icon icon={BadgeCheck} uiSize="3xl" />
		<Icon icon={BadgeCheck} uiSize="4xl" />
		<Icon icon={BadgeCheck} uiSize="5xl" />
		<Icon icon={BadgeCheck} uiSize="6xl" />
		<Icon icon={BadgeCheck} uiSize="7xl" />
		<Icon icon={BadgeCheck} uiSize="8xl" />
	</div>

	<h2>Color</h2>
	<div class="flex items-center gap-2">
		<Icon icon={BadgeCheck} uiSize="lg" class="text-red-500" />
		<Icon icon={BadgeCheck} uiSize="lg" class="text-green-500" />
		<Icon icon={BadgeCheck} uiSize="lg" class="text-blue-500" />
		<Icon icon={BadgeCheck} uiSize="lg" class="text-purple-500" />
	</div>
</div>
