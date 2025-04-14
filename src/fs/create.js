import { promises as fs } from 'fs';
import { join } from 'path';
import {getPath} from "../utils/getPath.js";

const create = async () => {
    const {__dirname} = getPath(import.meta.url)
    const folderPath = join(__dirname, 'files');
    const filePath = join(folderPath, 'fresh.txt');

    try {
        await fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
    } catch (err) {
        if (err.code === 'EEXIST') {
            return  console.error('FS operation failed');
        }

        console.error(err.message);
    }
};

await create();