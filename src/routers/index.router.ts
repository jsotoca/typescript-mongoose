import express from 'express';
import userRouter from './user.router';

const routers = express();

routers.use('/user',userRouter);

export default routers;