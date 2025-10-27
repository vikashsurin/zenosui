<script lang="ts">
	import Input from '$lib/ui/_primitives/Input.svelte';
	import Button from '$lib/ui/button/Button.svelte';
	import { Card, CardHeader, CardBody, CardFooter, Icon } from '$lib/ui/index.js';
</script>

<div>
	<Card>
		<CardHeader class="p-6">
			<h1>Login to your account</h1>
			<p>Enter your email below to login</p>
		</CardHeader>
		<CardBody class="flex flex-col gap-4 p-6">
			<label
				>Email
				<Input class="block w-full" type="email" placeholder="Email" />
			</label>
			<label>
				<span class="flex justify-between">
					<span>Password</span>
					<a href="#" class="text-sm">forgot your password?</a>
				</span>
				<Input class="block w-full" type="password" placeholder="Password" />
			</label>
		</CardBody>
		<CardFooter class="flex flex-col gap-4 p-6">
			<Button class="w-full" label="Login"></Button>
			<Button themed={false} uiFill="outline" class="w-full" label="Login with Google"></Button>
		</CardFooter>
	</Card>
</div>

<style>
</style>
