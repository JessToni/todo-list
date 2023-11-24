import { projects } from "./globalState";
import createTodoHeader from './todo-header';
import createTodoContentContainer from './todo-content';
import createMyProjects from './project-modal';

function initialLoad() {
    createTodoHeader();
    createTodoContentContainer();
    createMyProjects();
}

export default initialLoad;