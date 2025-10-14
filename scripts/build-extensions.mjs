import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';
import {fileURLToPath} from 'node:url'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dist = 'dist';
const sourceRoot = path.resolve(__dirname, '..');

const filesToCopy = [
    'manifest.json', 
    'src/popup/popup.html', 
    'src/popup/popup.js', 
    'src/styles/global.css',
    'src/background/service-worker.js',
    'pages/blocked.html', 
    'icons/icon16.png', 
    'icons/icon32.png', 
    'icons/icon48.png', 
    'icons/icon128.png',
];

async function buildExtension() {
    await fs.rm(dist, {recursive: true, force: true});
    await fs.mkdir(dist, {recursive: true});

    for(const file of filesToCopy){
        const sourcePath = path.join(sourceRoot, file);
        const destPath = path.join(dist, file);

        await fs.mkdir(path.dirname(destPath), {recursive: true});
        await fs.copyFile(sourcePath, destPath);
    }

    const zipPath = path.join(dist, 'extension.zip');
    const output = fsSync.createWriteStream(zipPath);
    const archive = archiver('zip', {zlib:{level: 9}});

    await new Promise((resolve, reject) => {
        output.on('close', resolve);
        archive.on('error', reject);
        archive.pipe(output);
        archive.directory(dist, false);
        archive.finalize();
    });

    console.log("dist/ pronto e extensão gerada com sucesso!");
}

buildExtension();