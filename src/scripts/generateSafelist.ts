import fs from 'fs/promises';
import path from 'path';
import * as all from '../lib/style/index.ts';

function extractClasses(obj) {
	const classes = [];
	Object.values(obj).forEach((value) => {
		if (typeof value === 'string') {
			classes.push(...value.split(' ').filter((c) => c.trim()));
		}
	});
	return classes;
}
const safelist = [
	...extractClasses(all.ICON_SIZE),
	...extractClasses(all.SIZE_FOR_SWITCH),
	...extractClasses(all.TEXT_SIZE),
	...extractClasses(all.SIZE_PRESET),
	...extractClasses(all.COLOR_PRESET),
	...extractClasses(all.VARIANT),
	...extractClasses(all.ROUNDED),
	...extractClasses(all.PADDING)
];
console.log('Extracted classes:', safelist);
async function generateSafelist() {
	const content = JSON.stringify(safelist, null, 2);
	console.log('Generated safelist content:', content);
	const filePath = path.join(process.cwd(), 'dist', 'safelist.json');

	await fs.mkdir(path.dirname(filePath), { recursive: true });
	await fs.writeFile(filePath, content);
}

generateSafelist().catch(console.error);
