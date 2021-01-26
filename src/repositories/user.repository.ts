import User from "../models/user.model";

export default class UserRepository {

    static async create(){
        try {
            const user = await User.create({
                fullname: 'gatito',
                email: 'gatitomalo@gmail.com',
                username: 'codex',
                password: '123456'
            });
            return user;
        } catch (error) {
            console.log(error);
        }
    }

}