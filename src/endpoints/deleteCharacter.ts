import {Request, Response} from "express";
import {connection} from "../data/connection";


export const deleteCharacter = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id

        await connection("characters")
        .delete()
        .where({id})

        res.status(200).send("Personagem deletado!")

    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message);
    }
}