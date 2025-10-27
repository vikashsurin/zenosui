<script lang="ts">
	import { Meter, MeterIndicator, MeterTrack } from '$lib/ui/index.js';
</script>

<div>
	<Meter class="w-50">
		<div class="mb-2 flex items-center justify-between">
			<label for="meter">Meter</label>
			<label for="meter">25%</label>
		</div>
		<MeterTrack id="meter" uiSize="xs" uiRounded="full">
			<MeterIndicator uiRounded="none" min="0" max="120" value="70" />
			<MeterIndicator uiRounded="none" min="0" max="120" value="10" class="bg-amber-700" />
		</MeterTrack>
	</Meter>
</div>
