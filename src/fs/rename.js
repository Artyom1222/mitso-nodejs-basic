import fs from 'fs/promises';
import {getPath} from "../utils/getPath.js";
import {join} from "path";

const rename = async () => {
    const {__dirname} = getPath(import.meta.url)
    const folderPath = join(__dirname, 'files');

    const oldFilePath = join(folderPath, 'wrongFilename.txt');
    const newFilePath = join(folderPath, 'properFilename.md');

    try {
        await fs.access(newFilePath);
        console.error('FS operation failed');
        return;
    } catch (err) {}

    try {
        await fs.rename(oldFilePath, newFilePath);
    } catch (err) {
        console.error('FS operation failed');
    }
};

await rename();
