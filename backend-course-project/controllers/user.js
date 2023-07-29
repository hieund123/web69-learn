import UserModel from "../models/user.js";
import { resClientData } from "../utils/index.js";

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
    }
};
export default userController;