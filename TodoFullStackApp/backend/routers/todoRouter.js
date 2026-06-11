const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    const todoList = []
    // getting the data from JSON Server
    await fetch('http://localhost:3001/todos')
        .then(response => response.json())
        .then(data => {
            todoList.push(...data);
            res.json(todoList);
        })
        .catch(error => res.status(500).json({ error: 'Failed to fetch todos' }));
});

router.post('/', async(req, res) =>{
        const { title, description, completed } = req.body;
        const newTodo = {
            title,
            description,
            completed
        };
        // posting the data to JSON Server  
        await fetch('http://localhost:3001/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        })
        .then(response => response.json())
        .then(data => res.status(201).json(data))
})
module.exports = router;