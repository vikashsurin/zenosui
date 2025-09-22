<script lang="ts">
	import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '$lib/ui/index.js';
</script>

<div>
	<Accordion uiSize="md">
		<AccordionItem>
			<AccordionTrigger iconRightRotation="45deg" class="flex justify-start"
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
