import fs from 'fs/promises';
import crypto from 'crypto';

const filePath = '/Users/artemkovalenko/Desktop/mitso-nodejs-basic/src/hash/fileToCalculateHashFor.txt';

const calculateHash = async () => {
    try {
        
        const fileContent = await fs.readFile(filePath);

        const hash = crypto.createHash('sha256').update(fileContent).digest('hex');

        console.log(`SHA256-хэш файла: ${hash}`);
    } catch (error) {
    
        console.error(`Ошибка при вычислении хэша: ${error.message}`);
    }
};

await calculateHash();
