import {getPath} from "../utils/getPath.js";
import {join} from "path";
import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const {__dirname} = getPath(import.meta.url)

    const folderPath = join(__dirname, 'files');
    const inputPath = join(folderPath, 'fileToCompress.txt');
    const outputPath = join(folderPath, 'archive.gz');

    const readStream = fs.createReadStream(inputPath);
    const writeStream = fs.createWriteStream(outputPath);
    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();
