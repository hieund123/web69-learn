import express from 'express';
import mongoose from 'mongoose';
import CombineRouter from './routers/index.js';

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/social-media');

app.use(express.json());
app.use('/api/v1', CombineRouter);
app.get('', (_, res) => {
    res.send({
        message: 'Kết nối server thành công!'
    })
});

app.listen(5001, () => {
    console.log('Server is running!');
});