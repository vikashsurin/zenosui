import { type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	submit: async ({ request }) => {
		const data = await request.formData();
		const formData = Object.fromEntries(data);
		const fruit = formData.fruit;
		console.log('formData', fruit);
	}
};
