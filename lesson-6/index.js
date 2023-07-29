import express from 'express';
import mongoose from 'mongoose';
import { comparePassword, decodeToken, generateJwt, hashingPassword, resClientData } from './utils/index.js';
import AccountModel from './models/account.js';
import UserInfoModel from './models/userInfo.js';

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
        const token = generateJwt({
            accountId: crrAccount._id,
            role: crrAccount.role,
            email: crrAccount.email
        })
        resClientData(res, 200, {
            token
        }, 'Đăng nhập thành công!');
    } catch (error) {
        resClientData(res, 403, null, error.message);
    }
});
app.put('/api/v1/auth/update-info', (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const getToken = token.split(' ')[1];
        const verify = decodeToken(getToken);
        if (!verify) throw new Error('Verify thất bại!');
        req.user = verify;
        return next();

    } catch (error) {
        resClientData(res, 403, null, error.message);
    }
}, async (req, res) => {
    try {
        const user = req.user;
        const { userName } = req.body;
        if (!userName) throw new Error('Cần phải truyền trường userName!');
        const crrAccount = await AccountModel.findById(user._id);
        if (!crrAccount) throw new Error('Không tồn tại người dùng!');
        crrAccount.userName = userName;
        await crrAccount.save();
        resClientData(res, 201, {});
    } catch (error) {
        resClientData(res, 403, null, error.message);
    }
});

app.post('/api/v1/user-info', (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) throw new Error('UnAuthentication!');
        const getToken = token.split(' ')[1];
        const verify = decodeToken(getToken);
        if (!verify) throw new Error('Verify thất bại!');
        req.user = verify;
        return next();

    } catch (error) {
        resClientData(res, 403, null, error.message);
    }
}, async (req, res) => {
    try {
        const data = req.body;
        const putUserInfo = await UserInfoModel.create({
            ...data,
            accountId: req.user.accountId
        });
        resClientData(res, 201, putUserInfo);
    } catch (error) {
        resClientData(res, 403, null, error.message);
    }
});

app.get('/api/v1/user-info', (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) throw new Error('UnAuthentication!');
        const getToken = token.split(' ')[1];
        const verify = decodeToken(getToken);
        if (!verify) throw new Error('Verify thất bại!');
        req.user = verify;
        return next();

    } catch (error) {
        resClientData(res, 403, null, error.message);
    }
}, async (req, res) => {
    try {
        const userInfo = await UserInfoModel.findOne({
            accountId: req.user.accountId
        }).populate('accountId');
        if (!userInfo) throw new Error('Không tồn tại thông tin người dùng!');

        resClientData(res, 200, userInfo);
    } catch (error) {
        resClientData(res, 403, null, error.message);
    }
});
app.listen(5001, () => {
    console.log('Server is running!');
})