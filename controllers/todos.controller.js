const Todo = require("../models/todo.model");

exports.getAllTodos = async (req, res, next) => {
  let todos;
  try {
    todos = await Todo.getAllTodos();
  } catch (error) {
    return next(error);
  }
  res.status(200).json({
    todos: todos,
  });
};

exports.addTodo = async (req, res, next) => {
  const text = req.body.text;
  const todo = new Todo(text);
  let result;
  try {
    result = await todo.save();
  } catch (error) {
    return next(error);
  }
  const insertedId = result.insertedId;
  todo.id = insertedId.toString();
  res.status(201).json({
    message: "Add todo successfully.",
    createdTodo: todo,
  });
};

exports.updateTodo = async (req, res, next) => {
  const todoId = req.params.id;
  const newText = req.body.newText;

  const todo = new Todo(newText, todoId);

  try {
    await todo.save();
      res.status(201).json({
        message: "Todo updated",
        updatedTodo: todo
      })
  } catch (error) {
    next(error);
  }
};

exports.deleteTodo = async (req, res, next) => {
  const todoId = req.params.id

  await Todo.deleteById(todoId)

  res.status(200).json({
    message: "Todo deleted."
  })
};
