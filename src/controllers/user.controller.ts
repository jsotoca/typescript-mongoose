import { Request, Response } from 'express';
import UserService from '../services/user.service';

export const create = async (req:Request, res:Response) => {
    try {
        const user = await UserService.create();
        res.json({
            user
        });
    } catch (error) {
        res.json({
            error
        });
    }
}