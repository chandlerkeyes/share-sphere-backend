import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as mongoose from "mongoose";
import {createUser} from "./services/user";
import {UserSchema} from "./models/user";

dotenv.config();

async function connect() {
    try {
        await mongoose.connect(String(process.env.DB_URI))
        console.log("Connected to MongoDB");
        const user: UserSchema = {
            userId: "4d8b961d-d9cf-4f5d-8622-92e93c8e00e3",
            dateAccountCreated: new Date(),
            firstName: "Chandler",
            lastName: "Keyes",
            userName: "chandlerkeyes",
            email: "keyeschandler@gmail.com",
            password: "niceTrySillyG00se"
        }
        await createUser(user)
        console.log("Created user");
    } catch (e) {
        console.error(e);
    }
}

const app: Express = express();
const port = process.env.PORT;

connect();

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});