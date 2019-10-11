const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

// projects

router.post('/', (req, res) => {

});

router.get('/', (req, res) => {
    Projects.retrieveProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to retrieve projects.' });
        });
});

// resources

router.post('/:id/resources', (req, res) => {

});

router.get('/:id/resources', (req, res) => {
    
});

// tasks

router.post('/:id/tasks', (req, res) => {

});

router.get('/:id/tasks', (req, res) => {

});

module.exports = router;