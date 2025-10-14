<script lang="ts">
	import { H2 } from '$lib/index.js';
	import { Icon } from '$lib/index.js';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
</script>

<H2>Color</H2>
<div class="flex items-center gap-2">
	<Icon icon={BadgeCheck} uiSize="lg" class="text-red-500" />
	<Icon icon={BadgeCheck} uiSize="lg" class="text-green-500" />
	<Icon icon={BadgeCheck} uiSize="lg" class="text-blue-500" />
	<Icon icon={BadgeCheck} uiSize="lg" class="text-purple-500" />
</div>
