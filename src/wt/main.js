import { Worker } from 'worker_threads';
import os from 'os';
import {getPath} from "../utils/getPath.js";
import {join} from "path";

const performCalculations = async () => {
    const {__dirname} = getPath(import.meta.url)
    const workerPath = join(__dirname, 'worker.js');

    const numCpus = os.cpus().length;

    const createWorker = (n) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerPath);

            worker.on('message', (message) => {
                if (message.status === 'resolved') {
                    resolve({ status: 'resolved', data: message.data });
                } else {
                    reject({ status: 'error', data: null });
                }
            });

            worker.on('error', () => {
                reject({ status: 'error', data: null });
            });

            worker.on('exit', (code) => {
                if (code !== 0) {
                    reject({ status: 'error', data: null });
                }
            });

            worker.postMessage(n);
        });
    };


    const workerPromises = [];

    for (let i = 0; i < numCpus; i++) {
        const workerData = 10 + i;
        workerPromises.push(createWorker(workerData));
    }

    console.log(await Promise.all(workerPromises));
};

await performCalculations();
