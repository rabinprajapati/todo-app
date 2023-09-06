const router = require("express").Router();

const todo = require("../../modules/todos/todo.api");
router.use("/todos", todo);

module.exports = router;
