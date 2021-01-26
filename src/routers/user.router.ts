import { Router } from 'express';
import { create, getAll } from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/',getAll);
userRouter.post('/',create);

export default userRouter;