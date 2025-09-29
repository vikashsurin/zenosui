<script lang="ts">
	import { Button } from '$lib/ui/index.js';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';

	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
</script>

<div class="">
	<h2>Size</h2>
	<div class="flex items-end gap-2">
		<Button uiSize="xs" label="Button xs" uiColor="green" class="bg-green-600"></Button>
		<Button uiSize="sm" label="Button sm" class="bg-purple-600"></Button>
		<Button uiSize="md" uiColor="purple" label="Button md"></Button>
		<Button uiSize="lg" label="Button lg"></Button>
		<Button uiSize="xl" label="Button xl"></Button>
		<Button uiSize="2xl" label="Button 2xl"></Button>
	</div>
	<h2>Rounded</h2>
	<div class="flex items-end gap-2">
		<Button uiSize="md" uiRounded="none" label="Rounded none"></Button>
		<Button uiSize="md" uiRounded="xs" label="Rounded xs"></Button>
		<Button uiSize="md" uiRounded="sm" label="Rounded sm"></Button>
		<Button uiSize="md" uiRounded="md" label="Rounded md"></Button>
		<Button uiSize="md" uiRounded="lg" label="Rounded lg"></Button>
		<Button uiSize="md" uiRounded="xl" label="Rounded xl"></Button>
		<Button uiSize="md" uiRounded="2xl" label="Rounded 2xl"></Button>
		<Button uiSize="md" uiRounded="full" label="Rounded full"></Button>
	</div>
	<h2>With Icons</h2>
	<div class="flex items-end gap-2">
		<Button iconLeft={BadgeCheck} label="Icon left" />
		<Button iconRight={ChevronRight} label="Icon right" />
		<Button iconLeft={BadgeCheck} iconRight={ChevronRight} label="Icon left and right" />
	</div>

	<h2>Colors</h2>
	<div class="flex gap-2">
		<Button uiColor="deeppink" label="Primary" />
		<Button uiColor="success" label="Success" />
		<Button uiColor="danger" label="Danger" />
		<Button uiColor="warning" label="Warning" />
	</div>

	<h2>Variants</h2>
	<div class="flex gap-2">
		<Button uiColor="red" uiVariant="solid" label="Solid" class="  text-white	" />
		<Button uiColor="red" uiVariant="outlined" label="Outline" />
		<Button uiColor="green" uiVariant="dashed" iconRight={ChevronRight} label="Dashed" />
		<Button uiColor="primary" uiVariant="filled" label="Filled" />
		<Button uiColor="brown" uiVariant="ghost" label="Ghost" />
		<Button href="#" uiColor="primary" uiVariant="link" label="Link" />
	</div>
</div>
