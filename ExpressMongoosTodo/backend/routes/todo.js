const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch todos' });
    }   
});
router.post('/todo', async (req, res) => {
    try {
        console.log(req.body);
        const newTodo = new Todo(req.body);
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        console.error('Error creating todo:', error);
        res.status(500).json({ error: 'Failed to create todo' });
    }
});
router.delete('/todo/:task', async (req, res) => {
    try {
        const { task } = req.params;
        const deletedTodo = await Todo.findOneAndDelete({ task });   
        res.json(deletedTodo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete todo' });
    }
});
router.put('/todo/:task', async (req, res) => {
    try {
        const { task } = req.params;
        const { description } = req.body;
        const updatedTodo = await Todo.findOneAndUpdate({ task }, { description }, { new: true });
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update todo' });
    }
});
module.exports = router;