import { projects } from "./globalState";

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

        //Append all properties to taskElement
        taskElement.appendChild(taskName);
        taskElement.appendChild(taskDescription);
        taskElement.appendChild(taskDueDate);
        taskElement.appendChild(taskPriority);

        //Append all taskElement to rightContainer
        rightContainer.appendChild(taskElement);
    });
}