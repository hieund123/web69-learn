import { Router } from "express";
import TodoListRouter from "./todoList.js";
const RootRouterV1 = Router();

RootRouterV1.use('/todoList', TodoListRouter);

export default RootRouterV1;