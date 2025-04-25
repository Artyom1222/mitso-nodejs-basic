import { Transform } from 'stream';

const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
            // Переворачиваем текст
            this.push(chunk.toString().split('').reverse().join(''));
            callback();
        }
    });

    // Сообщение для пользователя
    console.log('Введите текст для переворота (нажмите Ctrl+D для завершения ввода):');

    // Связываем stdin с reverseStream и stdout
    process.stdin.pipe(reverseStream).pipe(process.stdout);

    // Обработка ошибок ввода
    process.stdin.on('error', (err) => console.error('Ошибка ввода:', err.message));

    // Обработка ошибок трансформации
    reverseStream.on('error', (err) => console.error('Ошибка трансформации:', err.message));

    // Обработка ошибок вывода
    process.stdout.on('error', (err) => console.error('Ошибка вывода:', err.message));
};

await transform();
