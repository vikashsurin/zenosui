<script lang="ts">
	import { IconButton } from '$lib/ui/index.js';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	import Bold from '@lucide/svelte/icons/bold';
	import Italic from '@lucide/svelte/icons/italic';
	import AlignCenter from '@lucide/svelte/icons/align-center';
</script>

<div>
	<div class="flex gap-2 rounded-lg bg-gray-100 p-2">
		<IconButton icon={BadgeCheck} class="bg-amber-900 text-amber-100" uiRounded="sm" />
		<IconButton icon={Bold} />
		<IconButton icon={Italic} />
		<IconButton icon={AlignCenter} />
	</div>
</div>
