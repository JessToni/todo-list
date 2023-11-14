import createTodoHeader from './todo-header';
import createTodoContentContainer from './todo-content';

function initialLoad() {
    createTodoHeader();
    createTodoContentContainer();
    createMyProjects();
}

export default initialLoad;