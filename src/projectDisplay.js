import { projects } from "./globalState";
import { Task } from "./task";

export const displayProjects = () => {
    const projectList = document.querySelector('.project-container');
    projectList.innerHTML = "";

    projects.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.textContent = project.name;
        projectItem.classList.add('project-item'); // Add class for styling
        projectItem.setAttribute('data-index', index); // Set the project index as a data attribute

        //Add event listener for each project
        projectItem.addEventListener('click', () => {
            displayTasks(project);
        });

        projectList.appendChild(projectItem);
    });
}

function displayTasks(project) {
    const rightContainer = document.querySelector('.right-container');
    rightContainer.innerHTML = ''; // Clear existing content

    //Create and append the Add Task Div
    const addTaskDiv = document.createElement('div');
    addTaskDiv.textContent = 'Add Task';
    addTaskDiv.classList.add('add-task');
    addTaskDiv.addEventListener('click', () => {
        //Function to display the task form
        showTaskForm(project, addTaskDiv);
    });
    rightContainer.appendChild(addTaskDiv);

    //Display existing tasks
    project.tasks.forEach(task => {
        //Task container
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        
        //Task name
        const taskName = document.createElement('div');
        taskName.textContent = task.name;
        taskName.classList.add('task-name');

        //Task description
        const taskDescription = document.createElement('div');
        taskDescription.textContent = task.description;
        taskDescription.classList.add('task-description');

        //Task due date
        const taskDueDate = document.createElement('div');
        taskDueDate.textContent = `Due: ${task.dueDate}`;
        taskDueDate.classList.add('task-due-date');

        // Task priority
        const taskPriority = document.createElement('div');
        taskPriority.textContent = `Priority: ${task.priority}`;
        taskPriority.classList.add('task-priority');

        const statusButton = document.createElement('button');
        statusButton.textContent = 'In Progress';
        statusButton.classList.add('status-in-progress');
        statusButton.onclick = () => toggleTaskStatus(task, statusButton);

        //Append all properties to taskElement
        taskElement.appendChild(taskName);
        taskElement.appendChild(taskDescription);
        taskElement.appendChild(taskDueDate);
        taskElement.appendChild(taskPriority);
        taskElement.appendChild(statusButton);

        //Append all taskElement to rightContainer
        rightContainer.appendChild(taskElement);
    });
}

function showTaskForm(project, addTaskDiv) {
    const rightContainer = document.querySelector('.right-container')
    
    addTaskDiv.style.display = 'none';

    //Create form
    const form = document.createElement('form');
    form.id = 'task-form';
    
    //Task name input
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Task Name';
    nameInput.required = true;
    form.appendChild(nameInput);

    //Task description input
    const descriptionInput = document.createElement('textarea');
    descriptionInput.placeholder = 'Task Description';
    descriptionInput.required = true; //required field
    form.appendChild(descriptionInput);

    //Task due date input
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.required = true; //required field
    form.appendChild(dueDateInput);

    //Priority Checkboxes
    const priorities = ["High", "Medium", "Low"];
    const priorityContainer = document.createElement('div');

    priorities.forEach(priority => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'radio';
        checkbox.name = 'priority';
        checkbox.value = priority;

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(priority));
        priorityContainer.appendChild(label);
    });

    form.appendChild(priorityContainer)

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton
    cancelButton.textContent = 'Cancel';
    cancelButton.onclick = () => {
        form.remove();
        addTaskDiv.style.display = 'block';
    };
    form.appendChild(cancelButton);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Add Task';
    form.appendChild(submitButton);

    //Add form just before the 'Add Task' div
    rightContainer.insertBefore(form, addTaskDiv);

    //Form submission event
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        //Create a new task and add it to the project
        const newTask = new Task(
            nameInput.value,
            descriptionInput.value,
            dueDateInput.value,
            form.priority.value //assuming priority is set via radio buttons
        );
        project.tasks.unshift(newTask); //adds the new task at the beginning

        //Redisplay tasks
        displayTasks(project);
    });
}

function toggleTaskStatus(task, button) {
    if (task.isComplete) {
        task.isComplete = false;
        button.textContent = 'In Progress';
        button.classList.replace('status-complete', 'status-in-progress');
    } else {
        task.isComplete = true;
        button.textContent = "Complete";
        button.classList.replace('status-in-progress', 'status-complete')
    }
}