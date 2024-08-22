import { loadDataTask, saveTask } from "../utils/fileUtils.js";
import { createTask } from "../models/task.js";

export const addTask = async (description) => {
    const tasks = await loadDataTask();
    const newTask = createTask(description, tasks.length + 1);
    tasks.push(newTask);
    await saveTask(tasks);
    console.log(`Tarea agragada con éxito (ID: ${newTask.id})`);
}

export const listTask = async () => {
    const task = await loadDataTask();
    if(task.length === 0) console.log("No existen tareas por mostrar");
    task.forEach(task => {
        console.log(`[${task.status}] ${task.id}: ${task.description}`)
    });
}