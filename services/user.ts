import UserModel, {UserSchema} from "../models/user";

export async function createUser(user: UserSchema) {
    try {
        const newUser = new UserModel(user);
        const savedUser = newUser.save();
        console.log('User saved to the database:', savedUser);
        return savedUser;
    } catch (e) {
        console.error('Error creating and saving user:', e);
        throw e
    }
}