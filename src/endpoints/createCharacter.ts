import {Request, Response} from "express";
import {connection} from "../data/connection";

export const createCharacter = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id, name, gender, description} = req.body
        // const id = Date.now()

            await connection("characters")
            .insert({id, name, gender, description})
        

        res.status(201).send("Personagem criado!")
        
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message);
    }
}