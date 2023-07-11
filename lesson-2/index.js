import express from 'express';
import RootRouterV1 from './routers/v1/index.js';
import dotEnv from 'dotenv';
dotEnv.config();

export const mapApi = `${process.env.API_DB_HOST_DEV}:${process.env.API_DB_HOST_DEV_PORT}`;

const app = express();
app.use(express.json());

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