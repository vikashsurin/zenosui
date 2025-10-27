<script lang="ts">
	import { Carousel } from '$lib/ui/index.js';

	const data = [
		{
			id: 1,
			href: 'https://images.pexels.com/photos/414781/pexels-photo-414781.jpeg'
		},
		{
			id: 2,
			href: 'https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg'
		},
		{
			id: 3,
			href: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg'
		},
		{
			id: 4,
			href: 'https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg'
		}
	];
</script>

<div>
	<Carousel uiSize="sm" uiRounded="none" {data}></Carousel>
</div>
