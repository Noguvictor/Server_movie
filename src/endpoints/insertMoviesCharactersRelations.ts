import {Request, Response} from "express";
import { request } from "http";
import {connection} from "../data/connection";

export const insertMoviesCharactersRelations = async (req: Request, res: Response): Promise<void> => {
    try {
        const {movie_id, character_id} = req.body;

        await connection("movies_characters_relations")
        .insert({movie_id, character_id})

        res.status(201).send("Relação criada com sucesso!")

    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage);
    }
}