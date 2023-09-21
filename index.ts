import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as mongoose from "mongoose";

dotenv.config();

async function connect() {
    try {
        await mongoose.connect(String(process.env.DB_URI))
        console.log("Connected to MongoDB");
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