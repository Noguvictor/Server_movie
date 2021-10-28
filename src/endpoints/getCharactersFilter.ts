import {Request, Response} from "express";
import {connection} from "../data/connection";

export const getCharactersFilter = async (req: Request, res: Response): Promise<void> => {
    try {
        const {name, orderBy, orderType} = req.query
        let page = Number(req.query.page)
        const size = 5
        const offset: number = size * (Number(page) - 1);

        const result = await connection("characters")
        .where("name", "LIKE", `%${name}%`)
        .orderBy(orderBy as string || "name", orderType as string )
        .offset(offset)      

        res.status(200).send(result)
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}
