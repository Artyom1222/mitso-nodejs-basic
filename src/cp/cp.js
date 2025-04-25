import { spawn } from 'child_process';
import {getPath} from "../utils/getPath.js";
import {join} from "path";

const spawnChildProcess = async (args) => {
    const { __dirname } = getPath(import.meta.url);
    const sourceFolder = join(__dirname, 'files');
    const filePatch = join(sourceFolder, 'script.js');

    const childProcess = spawn('node', [filePatch, ...args]);

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ["someArgument1", "someArgument2"]);
