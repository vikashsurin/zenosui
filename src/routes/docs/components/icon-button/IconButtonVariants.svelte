<script lang="ts">
	import { IconButton } from '$lib/index.js';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
</script>

<div class="">
	<div class="flex gap-2 py-4">
		<IconButton icon={BadgeCheck} uiSize="md" uiVariant="solid" uiRounded="xs" />
		<IconButton icon={BadgeCheck} uiSize="md" uiVariant="filled" uiRounded="sm" />
		<IconButton icon={BadgeCheck} uiSize="md" uiVariant="outlined" uiRounded="sm" />
		<IconButton icon={BadgeCheck} uiSize="md" uiVariant="dashed" uiRounded="sm" />
		<IconButton icon={BadgeCheck} uiSize="md" uiVariant="ghost" uiRounded="sm" />
		<IconButton icon={BadgeCheck} uiSize="md" uiVariant="link" uiRounded="sm" />
	</div>
</div>
