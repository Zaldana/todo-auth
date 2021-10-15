var express = require('express');
var router = express.Router();
const { jwtMiddleware } = require("../utils");

const {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
} = require("./controller/todoController");

router.get('/', jwtMiddleware, getAllTodos);

router.post("/create-todo", jwtMiddleware, createTodo);

router.delete("/delete-todo-by-id/:id", jwtMiddleware, deleteTodo);

router.put("/update-todo-by-id/:id", jwtMiddleware, updateTodo);

module.exports = router;