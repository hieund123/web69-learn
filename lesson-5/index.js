import express from 'express';
import mongoose from 'mongoose';
import TodoModel from './models/todoList.js';
import { getProjection } from './utils/index.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/web69').then((rs) => {
    console.log('Kết nối mongo thành công');
}).catch((err) => {
    console.log(err);
});

app.get('/api/v1/todo', async (req, res) => {
    try {
        const projection = req.query;
        const listTodo = await TodoModel.find({
            isDrop: false
        }, getProjection(projection));
        res.status(200).send({
            message: 'Thành công',
            data: listTodo,
            success: true
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false,
            data: null
        });
    }
});

app.post('/api/v1/todo', async (req, res) => {
    try {
        const data = req.body;
        const createdData = await TodoModel.create(data);
        res.status(201).send({
            message: 'Thành công',
            data: createdData,
            success: true
        })
    } catch (error) {
        res.status(403).send({
            message: error.message,
            data: null,
            success: false
        });
    }
});

app.put('/api/v1/todo/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateField = req.body;
        const updateTodo = await TodoModel.findOneAndUpdate({
            _id: id
        }, {
            ...updateField
        }, {
            new: true
        });
        res.status(201).send({
            message: 'Thành công',
            data: updateTodo,
            success: true
        })
    } catch (error) {
        res.status(403).send({
            message: error.message,
            data: null,
            success: false
        });
    }
})

app.listen(5001, () => {
    console.log('Server is running!');
});