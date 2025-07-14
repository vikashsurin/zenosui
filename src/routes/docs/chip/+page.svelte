<script lang="ts">
	import { Chip } from '$lib/ui/index.js';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
</script>

<div>
	<Chip
		label="Orange"
		sizeVariant="xs"
		roundedVariant="sm"
		iconRight={BadgeCheck}
		class=" bg-amber-500 "
		onclick={() => console.log('helo')}
	/>
</div>
