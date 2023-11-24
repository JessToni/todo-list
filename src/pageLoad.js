import { projects } from "./globalState";
import createTodoHeader from './todo-header';
import createTodoContentContainer from './todo-content';
import createMyProjects from './project-modal';
import { displayProjects } from "./projectDisplay";

function initialLoad() {
    createTodoHeader();
    createTodoContentContainer();
    createMyProjects();
    displayProjects();
}

export default initialLoad;