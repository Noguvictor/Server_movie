import knex from "knex";
import dotenv from "dotenv";
import { appendFile } from "fs";

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        port: Number(process.env.DB_PORT),
        multipleStatements: true
    }
})