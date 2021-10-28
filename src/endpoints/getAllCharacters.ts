import {Request, Response} from "express";
import {connection} from "../data/connection";

export const getAllCharacters = async (req: Request, res: Response): Promise<void> => {
    try {

        const result = await connection("characters")

        res.status(200).send(result)

    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}