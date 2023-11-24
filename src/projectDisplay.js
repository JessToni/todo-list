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

function displayTasks(obj) {
    alert("Hanokio");
}
/*function displayTasks(project) {
    const rightContainer = document.querySelector('.right-container');
    rightContainer.innerHTML = "";

    project.tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.textContent = task.name;
        rightContainer.appendChild(taskElement);
    });
}*/