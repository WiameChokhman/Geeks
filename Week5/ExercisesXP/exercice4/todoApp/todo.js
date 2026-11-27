
export class TodoList {
    constructor() {
        this.tasks = [];
    }

    // Ajouter une tâche
    addTask(task) {
        this.tasks.push({
            name: task,
            completed: false
        });

        console.log(`Task added: ${task}`);
    }

    // Marquer une tâche comme terminée
    completeTask(taskName) {
        const task = this.tasks.find(t => t.name === taskName);

        if (task) {
            task.completed = true;
            console.log(`Task completed: ${taskName}`);
        } else {
            console.log("Task not found!");
        }
    }

    // Afficher toutes les tâches
    listTasks() {
        console.log("\nTodo List:");

        this.tasks.forEach((task, index) => {
            const status = task.completed ? "Completed" : "Pending";

            console.log(`${index + 1}. ${task.name} - ${status}`);
        });
    }
}
