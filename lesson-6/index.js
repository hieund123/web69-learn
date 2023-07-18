import express from 'express';
import mongoose from 'mongoose';
import { comparePassword, hashingPassword, resClientData } from './utils/index.js';
import AccountModel from './models/account.js';

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/web69');
app.use(express.json());

app.post('/api/v1/auth/sign-up', async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashPassword = hashingPassword(password);
        const createdAccount = await AccountModel.create({
            email,
            password: hashPassword.hashedPassword,
            salt: hashPassword.salt
        });
        resClientData(res, 201, createdAccount);
    } catch (error) {
        if (error.code === 11000) {
            resClientData(res, 403, null, 'Email đã tồn tại!');
        } else {
            resClientData(res, 403, null, error.message);
        }
    }
});
app.post('/api/v1/auth/sign-in', async (req, res) => {
    try {
        const { email, password } = req.body;
        const crrAccount = await AccountModel.findOne({
            email
        });
        if (!crrAccount) throw new Error('Sai tài khoản hoặc mật khẩu!');
        const checkPassword = comparePassword(password, crrAccount.salt, crrAccount.password);
        if (!checkPassword) throw new Error('Sai tài khoản hoặc mật khẩu!');

        resClientData(res, 200, {}, 'Đăng nhập thành công!');
    } catch (error) {
        resClientData(res, 403, null, error.message);
    }
});

app.listen(5001, () => {
    console.log('Server is running!');
})