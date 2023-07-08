import express from 'express';
import crypto from 'crypto';
import RootRouterV1 from './routers/v1/index.js';

const app = express();
app.use(express.json());

export const todoList = [
    {
        id: crypto.randomUUID(),
        todoName: 'Quét nhà',
        date: new Date()
    },
    {
        id: crypto.randomUUID(),
        todoName: 'Nấu cơm',
        date: new Date()
    },
    {
        id: crypto.randomUUID(),
        todoName: 'Học bài',
        date: new Date()
    },
    {
        id: crypto.randomUUID(),
        todoName: 'Đi khám bệnh',
        date: new Date()
    },
]

app.use('/api/v1', RootRouterV1);

app.get('', (_, res) => {
    res.send({
        message: 'Kết nối thành công!',
        success: true
    })
})
app.listen(5500, () => {
    console.log('Server is running');
});