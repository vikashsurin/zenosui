<script lang="ts">
	import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '$lib/ui/index.js';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	import Plus from '@lucide/svelte/icons/plus';
	import X from '@lucide/svelte/icons/x';
</script>

<div class="w-1/2">
	<Accordion uiSize="md">
		<AccordionItem>
			<AccordionTrigger iconRightOpen={X} iconRightClose={Plus} class="flex justify-start"
				>Apples</AccordionTrigger
			>
			<AccordionContent>The apples are great.</AccordionContent>
		</AccordionItem>
		<AccordionItem>
			<AccordionTrigger>Bananas</AccordionTrigger>
			<AccordionContent>The Bananas are cool.</AccordionContent>
		</AccordionItem>
		<AccordionItem>
			<AccordionTrigger>Orages</AccordionTrigger>
			<AccordionContent>The Oranges are refreshing.</AccordionContent>
		</AccordionItem>
	</Accordion>
</div>
