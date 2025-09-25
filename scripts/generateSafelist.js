import fs from 'fs/promises';
import path from 'path';
import * as style from '../src/lib/style/index.js';

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
	...extractClasses(style.ICON_SIZE),
	...extractClasses(style.SIZE_FOR_SWITCH),
	...extractClasses(style.TEXT_SIZE),
	...extractClasses(style.SIZE_PRESET),
	...extractClasses(style.COLOR_PRESET),
	...extractClasses(style.FILL_VARIANT),
	...extractClasses(style.ROUNDED),
	...extractClasses(style.PADDING),
	...extractClasses(style.BACKGROUND_COLOR),
	...extractClasses(style.CONTENT_COLOR),
	...extractClasses(style.BORDER_COLOR), ,
	...extractClasses(style.BORDER),
	...extractClasses(style.OUTLINE_COLOR),
	...extractClasses(style.TEXT_SIZE_WITH_HEIGHT),
	...extractClasses(style.TEXT_SIZE_WITH_PADDING),
	...extractClasses(style.ICON_PLACEHOLDER_SIZE),
	...extractClasses(style.POSITION)

];
console.log('Extracted classes:', safelist);

async function generateSafelist() {
	const content = JSON.stringify(safelist, null, 2);
	console.log('Generated safelist content:', content);
	const filePath = path.join(process.cwd(), 'src/lib', 'safelist.json');

	await fs.mkdir(path.dirname(filePath), { recursive: true });
	await fs.writeFile(filePath, content);
}

generateSafelist().catch(console.error);
