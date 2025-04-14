import { fileURLToPath } from 'url';
import { dirname } from 'path';

export function getPath(metaUrl) {
    const filename = fileURLToPath(metaUrl);
    const dir = dirname(filename);

    return { __dirname: dir, __filename: filename };
}
