import express, {Request, Response} from 'express';
import {connection} from "../data/connection";
import {movie} from "../types";

export const createMovie = async (req: Request, res: Response): Promise<void> => {
    try{
        const {title, year} = req.body
        const id = Number(Date.now())

        if (!title || !year) {
            res.statusCode = 422;
            throw new Error("Favor informar todos os campos corretamente")
        }
        await connection("movies")
        .insert({title, year})

        res.status(201).send("Filme adicionado!")

    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}

