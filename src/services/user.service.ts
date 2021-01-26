import UserRepository from "../repositories/user.repository";

export default class UserService {

    static async create(){
        return await UserRepository.create();
    }

}