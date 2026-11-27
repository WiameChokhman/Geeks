
import { TodoList } from './todo.js';

// Créer une instance
const myTodo = new TodoList();

// Ajouter des tâches
myTodo.addTask("Learn JavaScript");
myTodo.addTask("Practice Node.js");
myTodo.addTask("Complete exercises");
myTodo.addTask("Learn React");

// Marquer des tâches comme terminées
myTodo.completeTask("Learn JavaScript");
myTodo.completeTask("Complete exercises");

// Afficher toutes les tâches
myTodo.listTasks();
