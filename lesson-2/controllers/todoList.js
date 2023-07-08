import crypto from 'crypto';

const todoListController = {
    getAll: async (req, res) => {
        const data = await (await fetch('http://localhost:5001/todoList')).json();
        res.send({
            message: 'Thành công',
            data: data,
            success: true
        });
    },
    getOneById: async (req, res) => {
        const { id } = req.params;
        const currentTodo = await (await fetch(`http://localhost:5001/todoList/${id}`)).json();
        res.send({
            message: 'Thành công',
            data: currentTodo,
            success: true
        });
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
            const insert = await (await fetch('http://localhost:5001/todoList', {
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
    }
};
export default todoListController;