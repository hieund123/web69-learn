import UserModel from "../models/user.js";
import { genToken, resClientData } from "../utils/index.js";

const userController = {
    register: async (req, res) => {
        try {
            const { userName, password, email } = req.body;
            const newUser = {
                userName,
                password,
                email
            }
            const createdUser = await UserModel.create(newUser);
            resClientData(res, 201, createdUser, 'Đăng ký thành công!');
        } catch (error) {
            resClientData(res, 403, null, error.message);
        }
    },
    login: async (req, res) => {
        try {
            const { userName, password } = req.body;
            const user = await UserModel.findOne({
                userName,
                password
            }, {
                password: 0
            });
            if (!user) throw new Error('Sai tài khoản hoặc mật khẩu!');
            const token = genToken({
                userId: user._id,
                role: user.role
            })
            resClientData(res, 200, {
                accessToken: token,
                ...(user.toObject())
            }, 'Đăng nhập thành công!');
        } catch (error) {
            resClientData(res, 403, null, error.message);
        }
    },
    getInfo: async (req, res) => {
        try {
            const { userId, token } = req.user;
            const user = await UserModel.findById(userId, {
                password: 0
            });
            resClientData(res, 200, {
                ...(user.toObject()),
                accessToken: token
            })
        } catch (error) {
            resClientData(res, 403, null, error.message);
        }
    }
};
export default userController;