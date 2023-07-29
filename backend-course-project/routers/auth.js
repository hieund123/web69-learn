import { Router } from 'express';
import userController from '../controllers/user.js';
const AuthRouter = Router();

AuthRouter.post('/register', userController.register);

export default AuthRouter;