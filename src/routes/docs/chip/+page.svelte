<script lang="ts">
	import { Chip } from '$lib/ui/index.js';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
</script>

<div>
	<Chip
		label="Orange"
		uiRounded="full"
		uiSize="xs"
		iconRight={BadgeCheck}
		class=" "
		onclick={() => console.log('helo')}
	/>
</div>
