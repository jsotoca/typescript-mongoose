import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    fullname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true, select: false}
},
{
    timestamps:true
});

const User = model('user',userSchema);
export default User;