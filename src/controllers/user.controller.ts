import { Request, Response } from 'express';
import IUserCreate from '../dto/user-create.dto';
import UserService from '../services/user.service';

export const create = async (req:Request, res:Response) => {
    try {
        const { fullname, username, password, email } = req.body;
        const newUser: IUserCreate = { fullname, username, password, email }; 
        const user = await UserService.create(newUser);
        return res.json({
            user
        });
    } catch (error) {
        res.json({
            error
        });
    }
}

export const getAll = async (req:Request, res:Response) => {
    try {
        const users = await UserService.getAll();
        return res.json({
            users
        });
    } catch (error) {
        res.json({
            error
        });
    }
}