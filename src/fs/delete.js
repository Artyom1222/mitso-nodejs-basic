import fs from 'fs/promises';
import {getPath} from "../utils/getPath.js";
import {join} from "path";

const remove = async () => {
    const {__dirname} = getPath(import.meta.url)
    const folderPath = join(__dirname, 'files');
    const filePath = join(folderPath, 'fileToRemove.txt');

    try {
        await fs.unlink(filePath);
    } catch (err) {
        console.error('FS operation failed');
    }
};

await remove();
