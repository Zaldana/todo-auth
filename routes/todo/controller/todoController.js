const Todo = require('../model/Todo');
const errorHandler = require("../../utils/shared/errorHandler");
const User = require('../../users/model/User');

async function getAllTodos(req, res, next) {

    let foundAllTodo = await Todo.find({});
    res.json({ message: "success", foundAllTodo })

};

async function createTodo(req, res) {

    try {
        const { todo } = req.body;

        const decodedData = res.locals.decodedData
        let foundUser = await User.findOne({ email: decodedData.email })

        const createdTodo = new Todo({

            todo,
            userId: foundUser._id

        })

        let savedTodo = await createdTodo.save();

        foundUser.todoHistory.push(savedTodo._id);

        await foundUser.save();

        res.json({ message: "success", createdTodo })

    } catch (e) {

        res.status(500).json(errorHandler(e));

    }
};

async function updateTodo(req, res) {

    try {

        let foundTodo = await Todo.findById(req.params.id);

        if (!foundTodo) {

            res.status(404).json({ message: "failure", error: "Todo not found" });

        } else {

            let updatedTodo = await Todo.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true
                }
            );

            res.json({ message: "success", payload: updatedTodo })

        }

    } catch (e) {

        res.status(500).json(errorHandler(e));
    }
};

async function markDone(req, res) {

    try {

        let foundTodo = await Todo.findById(req.params.id);

        if (!foundTodo) {

            res.status(404).json({ message: "failure", error: "Todo not found" });

        } else {

            let updatedTodo = await Todo.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true
                }
            );

            res.json({ message: "success", payload: updatedTodo })

        }

    } catch (e) {

        res.status(500).json(errorHandler(e));
    }
};

async function deleteTodo(req, res) {

    try {

        let deletedTodo = await Todo.findByIdAndRemove(req.params.id);

        if (!deletedTodo) {

            return res.status(404).json({ message: "failure", error: "todo not found" })

        } else {

            const decodedData = res.locals.decodedData;

            let foundUser = await User.findOne({ email: decodedData.email });

            let userTodoHistoryArray = foundUser.todoHistory;

            let filteredTodoHistoryArray = userTodoHistoryArray.filter(
                (item) => item._id.toString() !== req.params.id);

            foundUser.todoHistory = filteredTodoHistoryArray;

            await foundUser.save();

            res.json({ message: "success", deletedTodo })

        }

    } catch (e) {

        res.status(500).json(errorHandler(e));

    }
};

module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo,
}