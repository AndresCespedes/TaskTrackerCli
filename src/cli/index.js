import { addTask, listTask } from "../controllers/taskControllers.js";

const [command, ...args] = process.argv.slice(2);

switch (command) {
    case 'add':
        await addTask(args[0]);
        break;
    case 'list':
        await listTask();
        break;
    default:
        console.log('Comando no reconocido');
}