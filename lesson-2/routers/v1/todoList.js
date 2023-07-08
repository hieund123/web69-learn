import { Router } from "express";
import todoListController from "../../controllers/todoList.js";
const TodoListRouter = Router();

TodoListRouter.get('', todoListController.getAll);
TodoListRouter.get('/:id', todoListController.getOneById);
TodoListRouter.post('', todoListController.create);

export default TodoListRouter;