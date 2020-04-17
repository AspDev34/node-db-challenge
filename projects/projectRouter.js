const express = require('express');

const ProjectsDb = require('./projectDb.js');

const router = express.Router();


//endpoints using router
router.get('/', (req, res) => {
    // api/posts
    ProjectsDb.get(req.query)
        .then(proj => {
            res.status(200).json(proj)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'error retrieving projects' })
        })
});

router.post('/', (req, res) => {
    ProjectsDb.insert(req.body)
        .then(proj => {
            res.status(200).json(proj)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "failed to add project"
            })
        })
})

router.get('/:id', (req, res) => {
    // api/posts
    ProjectsDb.getById(req.params.id)
        .then(proj => {
            res.status(200).json(proj)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'error retrieving project'
            })
        })
});

router.delete('/:id', (req, res) => {
    // api/posts
    ProjectsDb.remove(req.params.id)
        .then(proj => {
            res.status(200).json(proj)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: "failed to delete project entry" })
        })
});

router.put('/:id', (req, res) => {
    // api/posts
    ProjectsDb.update(req.params.id, req.body)
        .then(proj => {
            res.status(200).json(proj)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "failed to update project entry"
            })
        })
});

module.exports = router;