import {Request, Response} from "express";
import {connection} from "../data/connection";

export const  getMoviesCharactersRelations = async (req: Request, res: Response): Promise <void> => {
    try {
        const {movie_id, character_id} = req.params

        const result = await connection.raw(`
            SELECT title, name FROM movies_characters_relations
            JOIN movies ON movie_id = movies.id
            JOIN characters ON character_id = characters.id;
        `)

        res.status(200).send(result[0])
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage);
    }
}