const db = require('../db-config.js');

module.exports = {
    projectId,
    addProject,
    retrieveProjects,
    resourceId,
    addResource,
    retrieveResources,
    taskId,
    addTask,
    retrieveTasks
}

function projectId(id) {
    return db('projects')
        .where({ id })
        .first();
};

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
        .then(([id]) => {
            return projectId(id);
        });
};

function retrieveProjects() {
    return db('projects')
        .then(projects => {
            return projects.map(project => {
                project.completed = project.completed ? true : false;
                return project;
            });
        });
};

function resourceId(id) {
    return db('resources')
        .where({ id })
        .first();
};

function addResource(resource) {
    return db('resources')
        .insert(resource, 'id')
        .then(([id]) => {
            return resourceId(id);
        });
};

function retrieveResources() {
    return db('resources');
};

function taskId(id) {
    return db('tasks')
        .where({ id })
        .first();
};

function addTask(task) {
    return db('tasks')
        .insert(task, 'id')
        .then(([id]) => {
            return taskId(id);
        });
};

function retrieveTasks() {
    return db('tasks')
        .join('projects', 'projects.id', '=', 'tasks.project_id')
        .select('tasks.id', 'projects.name as project_name', 'projects.description as project_description', 'tasks.description as task_description', 'tasks.notes', 'tasks.completed')
        .then(tasks => {
            return tasks.map(task => {
                task.completed = task.completed ? true : false;
                return task;
            });
        });
};