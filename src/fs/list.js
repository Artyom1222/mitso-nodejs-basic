import fs from 'fs/promises';
import {getPath} from "../utils/getPath.js";
import {join} from "path";

const list = async () => {
    const {__dirname} = getPath(import.meta.url)
    const folderPath = join(__dirname, 'files');

    try {
        const files = await fs.readdir(folderPath);

        files.map(file => console.log(file))
    } catch (err) {
        console.error('FS operation failed');
    }
};

await list();
