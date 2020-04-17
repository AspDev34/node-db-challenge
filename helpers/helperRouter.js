const express = require('express');

const helperDB = require('./helpersForDB.js');

const router = express.Router();


//endpoints using router
router.get('/', (req, res) => {
    // api/posts
    helperDB.get(req.query)
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'error retrieving tasks' })
        })
});

router.post('/', (req, res) => {
    helperDB.insert(req.body)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "failed to add post"
            })
        })
})

router.get('/:id', (req, res) => {
    // api/posts
    helperDB.getById(req.params.id)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'error retrieving task'
            })
        })
});

router.delete('/:id', (req, res) => {
    // api/posts
    helperDB.remove(req.params.id)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: "failed to delete" })
        })
});

router.put('/:id', (req, res) => {
    // api/posts
    helperDB.update(req.params.id, req.body)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "failed to update task"
            })
        })
});

module.exports = router;