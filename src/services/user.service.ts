import UserRepository from "../repositories/user.repository";
import IUserCreate from "../dto/user-create.dto";

export default class UserService {

    static async create(user:IUserCreate){
        return await UserRepository.create(user);
    }

    static async getAll(){
        return await UserRepository.getAll();
    }

}