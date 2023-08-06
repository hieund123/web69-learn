import { createQueryApi } from "../utils";
import { Method } from "../utils/axios";

const queryUserRegister = createQueryApi('http://localhost:5001/api/v1/auth/register', Method['post']);
const queryUserLogin = createQueryApi('http://localhost:5001/api/v1/auth/login', Method['post']);
const queryUserInfo = createQueryApi('http://localhost:5001/api/v1/auth', Method['get']);
export {
    queryUserRegister,
    queryUserLogin,
    queryUserInfo
}