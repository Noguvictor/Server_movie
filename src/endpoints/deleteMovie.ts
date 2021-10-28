import {Request, Response} from "express";
import {connection} from "../data/connection";

export async function deleteMovie(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;

        const result = await connection("movies")
        .delete()
        .where({id});

        res.status(200).send("Filme deletado!")

    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}