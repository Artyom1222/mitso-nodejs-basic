import fs from 'fs/promises';
import {getPath} from "../utils/getPath.js";
import {join} from "path";

const read = async () => {
    const {__dirname} = getPath(import.meta.url)
    const folderPath = join(__dirname, 'files');
    const filePath = join(folderPath, 'fileToRead.txt');

    try {
        const content = await fs.readFile(filePath, 'utf-8');
        console.log(content);
    } catch (err) {
        console.error('FS operation failed');
    }
};

await read();
