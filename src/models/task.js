export const createTask = (description, id) => {
    const now = new Date().toISOString();
    return {
        id,
        description,
        status: 'TODO',
        createdAt: now,
        updatedAt: now,
    }
}