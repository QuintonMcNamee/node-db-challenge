const db = require('../db-config.js');

module.exports = {
    projectId,
    addProject,
    retrieveProjects,
    // addResource,
    // retrieveResources,
    // addTask,
    // retrieveTasks
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
    return db('projects');
};