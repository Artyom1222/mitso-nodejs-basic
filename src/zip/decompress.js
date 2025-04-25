import {getPath} from "../utils/getPath.js";
import {join} from "path";
import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
    const {__dirname} = getPath(import.meta.url)

    const folderPath = join(__dirname, 'files');
    const inputPath = join(folderPath, 'archive.gz');
    const outputPath = join(folderPath, 'fileToCompress1.txt');

    const readStream = fs.createReadStream(inputPath);
    const writeStream = fs.createWriteStream(outputPath);
    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
