<script lang="ts">
	import { Button, H2 } from '$lib/index.js';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
</script>

<div class="">
	<div class="flex gap-2 py-4">
		<Button iconLeft={BadgeCheck} uiSize="md" uiRounded="xs" label="Left Icon" />
		<Button iconRight={BadgeCheck} uiSize="md" uiRounded="xs" label="Right Icon" />
		<Button
			iconLeft={BadgeCheck}
			iconRight={BadgeCheck}
			uiSize="md"
			uiRounded="xs"
			label="Left and Right Icons"
		/>
	</div>
</div>
