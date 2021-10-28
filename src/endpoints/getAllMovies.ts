import {Request, Response} from "express";
import {connection} from "../data/connection";

export async function getAllMovies(req: Request, res: Response): Promise<void> {
    try {
        res.status(200).send(await connection("movies"));
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage);
    }
}