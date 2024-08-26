export const createTask = (description, id) => {
    const now = new Date().toISOString();
    return {
        id,
        description,
        status: 'todo',
        createdAt: now,
        updatedAt: now,
    }
}