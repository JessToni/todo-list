export class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(taskIndex) {
        this.tasks.splice(taskIndex, 1)
    }
}