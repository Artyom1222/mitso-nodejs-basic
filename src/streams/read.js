import fs from 'fs';
import {getPath} from "../utils/getPath.js";
import {join} from "path";

const read = async () => {
    const {__dirname} = getPath(import.meta.url)
    const folderPath = join(__dirname, 'files');
    const filePath = join(folderPath, 'fileToRead.txt');

    const readStream = fs.createReadStream(filePath, 'utf8');

    readStream.on('data', chunk => {
        process.stdout.write(chunk);
    });
};

await read();
