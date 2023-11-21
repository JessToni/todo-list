const createMyProjects = () => {
    const addProject = document.querySelector('#add-button');
    addProject.addEventListener('click', () => {
        openModal();
    })
}

function openModal() {
    //Generate HTML for modal
    const modal = document.createElement('div');
    modal.id = 'myModal';
    modal.classList.add('modal')

    //Modal content
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modal.appendChild(modalContent);

    //Form element
    const form = document.createElement('form');
    form.id = 'project-form';

    //Form rows
    const formRow1 = document.createElement('div');
    formRow1.id = 'form-row-1';

    //Labels
    const titleLabel = document.createElement('label');
    titleLabel.for = 'title';
    titleLabel.textContent = 'Name'
    formRow1.appendChild(titleLabel);

    //Title input
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Enter project name';
    formRow1.appendChild(titleInput);

    //Modal submit button
    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.value = 'Submit';
    submit.textContent = 'Submit';

    form.appendChild(formRow1);
    form.appendChild(submit);

    modalContent.appendChild(form)

    //Append the modal to the body
    document.body.appendChild(modal);

    //Display modal overlay
    modal.style.display = 'flex';

    //Close modal on click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

export default createMyProjects;