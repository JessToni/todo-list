import createTodoHeader from './todo-header';
import createTodoContentContainer from './todo-content';
import createMyProjects from './my-projects';

function initialLoad() {
    createTodoHeader();
    createTodoContentContainer();
    createMyProjects();
}

export default initialLoad;