<script lang="ts">
	import { Chip } from '$lib/ui/index.js';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
</script>

<div>
	<Chip
		label="Orange"
		uiSize="xs"
		uiRounded="sm"
		iconRight={BadgeCheck}
		class=" bg-amber-500 back"
		onclick={() => console.log('helo')}
	/>
</div>
