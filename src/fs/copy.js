import fs from 'fs/promises';
import { join } from 'path';
import { getPath } from "../utils/getPath.js";

const copy = async () => {
    const { __dirname } = getPath(import.meta.url);
    const sourceFolder = join(__dirname, 'files');
    const destinationFolder = join(__dirname, 'files_copy');

    try {
        await fs.access(sourceFolder);
    } catch (err) {
        console.error('FS operation failed');
        return;
    }

    try {
        await fs.access(destinationFolder);
        console.error('FS operation failed');
        return;
    } catch (err) {}

    await fs.mkdir(destinationFolder, { recursive: true });

    const items = await fs.readdir(sourceFolder);
    for (const item of items) {
        const sourceItem = join(sourceFolder, item);
        const destinationItem = join(destinationFolder, item);

        await fs.copyFile(sourceItem, destinationItem);
    }
};

await copy();
