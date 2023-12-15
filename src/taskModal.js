import { togglTaskStatus } from "./projectDisplay";
import { displayTasks } from "./projectDisplay";
import { Task } from "./task.js";

export function openTaskModal(task, project, taskIndex) {
    // Generate HTML for modal
    const modal = document.createElement('div');
    modal.id = 'taskModal';
    modal.classList.add('modal');

    // Modal content
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modal.appendChild(modalContent);

    // Form element
    const form = document.createElement('form');
    form.id = 'task-form';

    // First row for task input
    const formRow1 = document.createElement('div');
    formRow1.id = 'form-row-1';

    // Labels for task name input
    const taskNameLabel = document.createElement('label');
    taskNameLabel.for = 'taskName';
    taskNameLabel.textContent = 'Task Name';
    formRow1.appendChild(taskNameLabel);

    // Task name input
    const taskNameInput = document.createElement('input');
    taskNameInput.type = 'text';
    taskNameInput.value = task.name;
    formRow1.appendChild(taskNameInput);

    // Second form row for task description
    const formRow2 = document.createElement('div');
    formRow2.id = 'form-row-2';

    // Label for task description
    const taskDescriptionLabel = document.createElement('label');
    taskDescriptionLabel.for = 'taskDescription';
    taskDescriptionLabel.textContent = 'Task Description';
    formRow2.appendChild(taskDescriptionLabel);

    // Task description input
    const taskDescriptionInput = document.createElement('textarea');
    taskDescriptionInput.placeholder = 'Enter task description';
    taskDescriptionInput.value = task.description;
    formRow2.appendChild(taskDescriptionInput);

    // Third form row for due date
    const formRow3 = document.createElement('div');
    formRow3.id = 'form-row-3';

    // Label for due date
    const dueDateLabel = document.createElement('label');
    dueDateLabel.for = 'dueDate';
    dueDateLabel.textContent = 'Due Date';
    formRow3.appendChild(dueDateLabel)

    // Due date input
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    formRow3.appendChild(dueDateInput);

    // Fourth row for priority
    const formRow4 = document.createElement('div');
    formRow4.id = 'form-row-4';

    // Label for priority
    const taskPriorityLabel = document.createElement('label');
    taskPriorityLabel.for = 'taskPriority';
    taskPriorityLabel.textContent = 'Priority';
    formRow4.appendChild(taskPriorityLabel);

    // Priority select input
    const taskPriorityInput = document.createElement('select');
    taskPriorityInput.name = 'taskPriority';

    // Options for priority
    const priorityOptions = ["High", "Medium", "Low"];

    priorityOptions.forEach(priority => {
        const option = document.createElement('option');
        option.value = priority;
        option.text = priority;
        taskPriorityInput.appendChild(option);
    });

    taskPriorityInput.value = task.priority;

    formRow4.appendChild(taskPriorityInput);

    // Modal submit button
    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.value = 'Submit';
    submit.textContent = 'Submit';

    form.appendChild(formRow1);
    form.appendChild(formRow2);
    form.appendChild(formRow3);
    form.appendChild(formRow4);
    form.appendChild(submit);

    modalContent.appendChild(form);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Display modal overlay
    modal.style.display = 'flex';

    //Submit button listener
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Update task details here if needed
        task.updateName(taskNameInput.value.trim());
        task.updateDescription(taskDescriptionInput.value.trim());
        task.updateDueDate(dueDateInput.value.trim())
        task.updatePriority(taskPriorityInput.value);

        // Close the modal
        modal.style.display = 'none';

        // Redisplay tasks or perform other necessary actions
        displayTasks(project);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}