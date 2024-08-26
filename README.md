# Task Tracker CLI

Task Tracker CLI es una herramienta de línea de comandos simple y eficiente diseñada para ayudarte a gestionar tus tareas de manera efectiva. Con esta aplicación, puedes agregar, actualizar, eliminar y listar tareas directamente desde la terminal.

## Características

- **Agregar tareas**: Crea nuevas tareas con una breve descripción.
- **Actualizar tareas**: Modifica la descripción de una tarea existente.
- **Eliminar tareas**: Borra una tarea de la lista.
- **Marcar tareas**: Cambia el estado de una tarea a "en progreso" o "completada".
- **Listar tareas**: Muestra todas las tareas, o filtra según su estado.

## Requisitos

- Node.js v14 o superior
- Git (opcional, para clonar el repositorio)

## Instalación

1. **Clona el repositorio** (opcional):

   ```bash
   git clone https://github.com/tu-usuario/task-tracker-cli.git
   cd task-tracker-cli
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Configura el comando task-cli:**

   ```bash
   npm link
   ```

## Uso

- **Agregar tareas**:

```bash
task-cli add "Comprar alimentos"
```


- **Actualizar tareas**:

```bash
task-cli update <task_id> "Comprar alimentos y cocinar la cena"
```

- **Eliminar tareas**:

```bash
task-cli delete <task_id>
```

- **Marcar tareas**:

```bash
task-cli mark-in-progress <task_id>
```

```bash
task-cli mark-done <task_id>
```

- **Listar tareas**:

```bash
task-cli list
```

- **Salida esperada**:

```bash
1. [TODO] Comprar alimentos (ID: 1)
2. [DONE] Hacer ejercicio (ID: 2)
```

- **Tareas por hacer**:

```bash
task-cli list todo
```

- **Salida esperada**:

```bash
1. [todo] Comprar alimentos (ID: 1)
```

- **Tareas en progreso**:

```bash
task-cli list in-progress
```

- **Salida esperada**:

```bash
1. [in-progress] Lavar la ropa (ID: 3)
```