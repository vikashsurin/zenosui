// scripts/fix-extensions.js
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const distDir = './dist';

// Find all .js files in dist
const jsFiles = glob.sync(`${distDir}/**/*.js`);

jsFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Replace .ts extensions with .js in import/export statements
    content = content.replace(/from ['"]([^'"]+)\.ts['"]/g, "from '$1.js'");
    content = content.replace(/import\(['"]([^'"]+)\.ts['"]\)/g, "import('$1.js')");
    content = content.replace(/export \* from ['"]([^'"]+)\.ts['"]/g, "export * from '$1.js'");

    fs.writeFileSync(file, content);
});

console.log('Fixed .ts extensions in built files');