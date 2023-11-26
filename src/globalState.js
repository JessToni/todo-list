import { Project } from "./project";
import { Task } from "./task";

export const projects = [];

const myDay = new Project("My Day");
projects.push(myDay);

//Create test project
const testProject = new Project("Test Project");

//Add test tasks to testProject
testProject.tasks.push(new Task("Jog", "Run around the oval", "2023-01-05", "High"));
testProject.tasks.push(new Task("Frolic", "Walk around happily", "2023-01-06", "Medium"));

projects.push(testProject);