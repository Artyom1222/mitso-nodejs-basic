import fs from 'fs';
import { getPath } from "../utils/getPath.js";
import { join } from "path";

const write = async () => {
    const { __dirname } = getPath(import.meta.url);
    const folderPath = join(__dirname, 'files');
    const filePath = join(folderPath, 'fileToWrite.txt');

    const writeStream = fs.createWriteStream(filePath);

    console.log('Введите данные (нажмите Ctrl+D для завершения ввода):');

    process.stdin.setEncoding('utf8'); // Устанавливаем кодировку
    process.stdin.resume(); // Активируем чтение stdin
    process.stdin.pipe(writeStream);

    process.stdin.on('data', (chunk) => {
        console.log('Получено из stdin:', chunk.toString()); // Диагностика
    });

    process.stdin.on('end', () => {
        writeStream.end(); // Завершаем поток записи
    });

    writeStream.on('finish', () => {
        console.log('Данные успешно записаны в файл.');
    });

    process.stdin.on('error', (err) => console.error('Ошибка чтения stdin:', err.message));
    writeStream.on('error', (err) => console.error('Ошибка записи в файл:', err.message));
};

await write();
