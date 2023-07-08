import { todoList } from "../index.js";

const todoListController = {
    getAll: (req, res) => {
        res.send({
            message: 'Thành công',
            data: todoList,
            success: true
        });
    },
    getOneById: (req, res) => {
        const { id } = req.params;
        const crrTodo = todoList.find((item) => {
            return item.id === id;
        });
        res.send({
            message: 'Thành công',
            data: crrTodo,
            success: true
        });
    },
    create: (req, res) => {
        const { todoName, date } = req.body;
        const newTodo = {
            id: crypto.randomUUID(),
            todoName: todoName,
            date: date
        };
        todoList.push(newTodo);
        res.send({
            message: 'Thành công',
            data: todoList,
            success: true
        });
    }
};
export default todoListController;