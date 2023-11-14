const createTodoContentContainer = () => {
    const contentContainer = document.querySelector('#content')
    
    //Create divs for left and right part of content div
    const leftContainer = document.createElement('div');
    leftContainer.classList.add('left-container');
    const rightContainer = document.createElement('div');
    rightContainer.classList.add('right-container');

    //Append left and right sections to content div
    contentContainer.appendChild(leftContainer);
    contentContainer.appendChild(rightContainer)

    //Add a container for projects, a header section and an "add" button
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    leftContainer.appendChild(projectContainer);

    //Add header section for projects
    const projectHeader = document.createElement('div');
    projectHeader.classList.add('project-header');
    projectContainer.appendChild(projectHeader);

    //Add heading for header section
    const projectTitle = document.createElement('h4');
    projectTitle.textContent = "My project";
    projectHeader.appendChild(projectTitle);

    //Add '+' button to header section
    const addProject = document.createElement('button');
    addProject.textContent = "+";
    projectHeader.appendChild(addProject);

    projectContainer.appendChild(projectHeader);
    leftContainer.appendChild(projectContainer);
}

export default createTodoContentContainer;