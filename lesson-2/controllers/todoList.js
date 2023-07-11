import crypto from 'crypto';
import { mapApi } from '../index.js';

const todoListController = {
    getAll: async (req, res) => {
        console.log(mapApi);
        const data = await (await fetch(`${mapApi}/todoList`)).json();
        res.send({
            message: 'Thành công',
            data: data,
            success: true
        });
    },
    getOneById: async (req, res) => {
        try {
            const { id } = req.query;
            const currentTodo = await (await fetch(`${mapApi}/todoList/${id}`)).json();
            res.send({
                message: 'Thành công',
                data: currentTodo,
                success: true
            });
        } catch (error) {

        }
    },
    create: async (req, res) => {
        try {
            const { todoName } = req.body;
            if (!todoName) throw new Error('Bạn chưa truyền tên công việc (todoName)!');
            const newTodo = {
                id: crypto.randomUUID(),
                todoName: todoName,
                date: (new Date).getTime()
            };
            const insert = await (await fetch('${mapApi}/todoList', {
                method: 'post',
                body: JSON.stringify(newTodo),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })).json();
            if (!insert) throw new Error('Không thành công');
            res.status(201).send({
                message: "Thành công!",
                data: insert,
                success: false
            });
        } catch (error) {
            res.status(403).send({
                message: error.message,
                data: null,
                success: false
            });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { todoName, date } = req.body;
            const updateTodo = await (await fetch(`${mapApi}/todoList/${id}`, {
                method: 'put',
                body: JSON.stringify({
                    todoName,
                    date
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })).json();
            res.status(201).send({
                data: updateTodo,
                message: 'Thành công!',
                success: true
            })
        } catch (error) {
            console.log(error.message);
            res.status(500).send({
                data: null,
                message: 'Không thành công!',
                success: false
            })
        }
    }
};
export default todoListController;