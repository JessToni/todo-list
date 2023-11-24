import { projects } from "./globalState";

export const displayProjects = () => {
    const projectList = document.querySelector('.project-container');
    projectList.innerHTML = "";

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.textContent = project.name;
        projectList.appendChild(projectItem);
    });
}