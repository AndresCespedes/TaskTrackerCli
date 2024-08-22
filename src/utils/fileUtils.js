import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const taskFilePath = path.join(__dirname, '../data/task.json');

export const loadDataTask = async () => {
    try {
        const data = await fs.readFile(taskFilePath, 'utf-8');
        if (data.trim() === '') return [];
        return JSON.parse(data);
    } catch (error) {
        if (error === 'ENOENT') return [];
        throw error;
    }
}

export const saveTask = async (tasks) => {
    await fs.writeFile(taskFilePath, JSON.stringify(tasks, null, 2));
}