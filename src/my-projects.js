const createMyProjects = () => {
    const addProject = document.querySelector('#add-button');
    addProject.addEventListener('click', () => {
        openModal();
    })
}

function openModal() {
    //Generate HTML for modal that asks for Project name
    console.log('Hello')
}

export default createMyProjects;