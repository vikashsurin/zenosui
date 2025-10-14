<script lang="ts">
	import { IconButton } from '$lib/index.js';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
</script>

<div class="">
	<div class="flex gap-2 py-4">
		<IconButton uiSize="md" uiRounded="xs" icon={BadgeCheck} />
		<IconButton uiSize="md" uiRounded="sm" icon={BadgeCheck} />
		<IconButton uiSize="md" uiRounded="md" icon={BadgeCheck} />
		<IconButton uiSize="md" uiRounded="lg" icon={BadgeCheck} />
		<IconButton uiSize="md" uiRounded="xl" icon={BadgeCheck} />
		<IconButton uiSize="md" uiRounded="2xl" icon={BadgeCheck} />
		<IconButton uiSize="md" uiRounded="3xl" icon={BadgeCheck} />
		<IconButton uiSize="md" uiRounded="4xl" icon={BadgeCheck} />
		<IconButton uiSize="md" uiRounded="full" icon={BadgeCheck} />
	</div>
</div>
