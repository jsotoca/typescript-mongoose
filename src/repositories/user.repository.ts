import User from "../models/user.model";
import IUserCreate from "../dto/user-create.dto";

export default class UserRepository {

    static async create(user:IUserCreate){
        try {
            const newUser = await User.create(user);
            return newUser;
        } catch (error) {
            throw error;
        }
    }

}