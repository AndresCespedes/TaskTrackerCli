import { loadDataTask, saveTask } from "../utils/fileUtils.js";
import { createTask } from "../models/task.js";
import { v4 as uuidv4 } from 'uuid';

// Agregar una nueva tarea
export const addTask = async (description) => {
    const tasks = await loadDataTask();
    const newTask = createTask(description, uuidv4());
    tasks.push(newTask);
    await saveTask(tasks);
    console.log(`Tarea agragada con éxito (ID: ${newTask.id})`);
}

// Actualizar una tarea existente
export const updateTask = async (id, newDescription) => {
    const tasks = await loadDataTask();
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex !== -1) {
        tasks[taskIndex].description = newDescription;
        tasks[taskIndex].updatedAt = new Date().toISOString();
        await saveTask(tasks);
        console.log(`Task with ID ${id} updated successfully.`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
};

// Eliminar una tarea
export async function deleteTask(id) {
    // Cargar todas las tareas
    const tasks = await loadDataTask();

    // Buscar la tarea a eliminar
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
        console.log(`Task with ID ${id} not found.`);
        return;
    }

    // Eliminar la tarea si se encuentra
    tasks.splice(taskIndex, 1);

    // Guardar las tareas actualizadas
    await saveTask(tasks);

    console.log(`Task with ID ${id} deleted successfully.`);
}

// Marcar una tarea como en progreso
export const markTaskInProgress = async (id) => {
    const tasks = await loadDataTask();
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex !== -1) {
        tasks[taskIndex].status = 'in-progress';
        tasks[taskIndex].updatedAt = new Date().toISOString();
        await saveTask(tasks);
        console.log(`Task with ID ${id} marked as in progress.`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
};

// Marcar una tarea como hecha
export const markTaskDone = async (id) => {
    const tasks = await loadDataTask();
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex !== -1) {
        tasks[taskIndex].status = 'done';
        tasks[taskIndex].updatedAt = new Date().toISOString();
        await saveTask(tasks);
        console.log(`Task with ID ${id} marked as done.`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
};

export const listTask = async () => {
    const task = await loadDataTask();
    if (task.length === 0) console.log("No existen tareas por mostrar");
    task.forEach(task => {
        console.log(`[${task.status}] ${task.id}: ${task.description}`)
    });
}

// Listar tareas por estado
export const listTasksByStatus = async (status) => {
    const tasks = await loadDataTask();
    const filteredTasks = tasks.filter(task => task.status === status);

    if (filteredTasks.length > 0) {
        filteredTasks.forEach(task => {
            console.log(`ID: ${task.id}, Description: ${task.description}, Status: ${task.status}, Created At: ${task.createdAt}`);
        });
    } else {
        console.log(`No tasks found with status '${status}'.`);
    }
};