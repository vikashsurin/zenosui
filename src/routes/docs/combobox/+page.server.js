


export const actions = {
    combobox: async ({ request }) => {
        const formData = await request.formData();
        const fruit = formData.get("fruit");
        console.log("Selected fruit:", fruit);
    }
}