import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    dateAccountCreated: {
        type: Date,
        default: new Date()
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePictureUrl: String,
    bio: String
});

export type UserSchema = {
    userId: string
    dateAccountCreated: Date,
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    profilePictureUrl?: string
    bio?: string
}

const UserModel = mongoose.model<UserSchema>('User', userSchema)
export default UserModel