import { Router } from 'express';
import userController from '../controllers/user.js';
import middlewares from '../middlewares/index.js';
const AuthRouter = Router();

AuthRouter.post('/register', userController.register);
AuthRouter.post('/login', userController.login);
AuthRouter.get('', middlewares.verifyToken, userController.getInfo);

export default AuthRouter;