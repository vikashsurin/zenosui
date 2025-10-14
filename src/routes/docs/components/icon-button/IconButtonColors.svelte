<script lang="ts">
	import { IconButton } from '$lib/index.js';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
</script>

<div class="">
	<div class="flex gap-2 py-4">
		<IconButton icon={BadgeCheck} uiSize="md" uiColor="primary" uiRounded="xs" />
		<IconButton icon={BadgeCheck} uiSize="md" uiColor="danger" uiRounded="sm" />
		<IconButton icon={BadgeCheck} uiSize="md" uiColor="success" uiRounded="sm" />
		<IconButton icon={BadgeCheck} uiSize="md" uiColor="warning" uiRounded="sm" />
	</div>
	<div class="flex gap-2">
		<IconButton icon={BadgeCheck} uiSize="md" uiColor="brown" uiRounded="sm" />
		<IconButton icon={BadgeCheck} uiSize="md" uiColor="yellow" uiRounded="sm" />
		<IconButton icon={BadgeCheck} uiSize="md" uiColor="blue" uiRounded="sm" />
		<IconButton icon={BadgeCheck} uiSize="md" uiColor="orange" uiRounded="sm" />
		<IconButton icon={BadgeCheck} uiSize="md" uiColor="#E91E63" uiRounded="sm" />
		<IconButton icon={BadgeCheck} uiSize="md" uiColor="rgb(3, 169, 244)" uiRounded="sm" />
		<IconButton icon={BadgeCheck} uiSize="md" uiColor="hsl(291.33,100.00%,48.82%)" uiRounded="sm" />
	</div>
</div>
