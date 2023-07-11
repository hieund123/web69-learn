import { Router } from "express";
import todoListController from "../../controllers/todoList.js";
import { validateMiddleWare } from "../../utils/index.js";
import { validateGetTodo, validateUpdateTodo } from "./validate.js";
const TodoListRouter = Router();

TodoListRouter.get('', todoListController.getAll);
TodoListRouter.get('/query', validateMiddleWare(validateGetTodo), todoListController.getOneById);
TodoListRouter.post('', todoListController.create);
TodoListRouter.put('/:id', validateMiddleWare(validateUpdateTodo),todoListController.update);

export default TodoListRouter;