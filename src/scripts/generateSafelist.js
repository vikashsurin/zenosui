import fs from 'fs/promises';
import path from 'path';
import * as all from '../lib/style/index.js';

/**
 * @param {{ [s: string]: any; } | ArrayLike<any>} obj
 */
function extractClasses(obj) {
	/**
	 * @type {string[]}
	 */
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
	...extractClasses(all.FILL_VARIANT),
	...extractClasses(all.ROUNDED),
	...extractClasses(all.PADDING),
	...extractClasses(all.BACKGROUND_COLOR),
	...extractClasses(all.CONTENT_COLOR),
	...extractClasses(all.BORDER_COLOR), ,
	...extractClasses(all.BORDER),
	...extractClasses(all.OUTLINE_COLOR),
	...extractClasses(all.TEXT_SIZE_WITH_HEIGHT),
	...extractClasses(all.TEXT_SIZE_WITH_PADDING),
	...extractClasses(all.ICON_PLACEHOLDER_SIZE),

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
