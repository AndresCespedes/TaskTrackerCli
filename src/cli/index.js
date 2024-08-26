#!/usr/bin/env node

import {
    addTask,
    updateTask,
    deleteTask,
    markTaskInProgress,
    markTaskDone,
    listTask,
    listTasksByStatus,
} from '../controllers/taskControllers.js';

const [command, ...args] = process.argv.slice(2);

const handleCommands = async () => {
    switch (command) {
        case 'add':
            if (args.length === 1) {
                await addTask(args[0]);
            } else {
                console.log('Uso: task-cli add "Descripción de la tarea"');
            }
            break;
        case 'update':
            if (args.length === 2) {
                const description = args[1];
                await updateTask(args[0], description);
            } else {
                console.log('Uso: task-cli update <ID> "Nueva descripción de la tarea"');
            }
            break;
        case 'delete':
            if (args.length === 1) {
                await deleteTask(args[0]);
            } else {
                console.log('Uso: task-cli delete <ID>');
            }
            break;
        case 'mark-in-progress':
            if (args.length === 1) {
                await markTaskInProgress(args[0]);
            } else {
                console.log('Uso: task-cli mark-in-progress <ID>');
            }
            break;
        case 'mark-done':
            if (args.length === 1) {
                await markTaskDone(args[0]);
            } else {
                console.log('Uso: task-cli mark-done <ID>');
            }
            break;
        case 'list':
            if (args.length === 0) {
                await listTask();
            } else if (args.length === 1) {
                const status = args[0];
                await listTasksByStatus(status);
            } else {
                console.log('Uso: task-cli list [done|todo|in-progress]');
            }
            break;
        default:
            console.log('Comando no reconocido. Usa uno de los siguientes comandos: add, update, delete, mark-in-progress, mark-done, list');
    }
};

handleCommands();
