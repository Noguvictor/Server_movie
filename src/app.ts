import express, {Express} from "express";
import cors from "cors";
import {AddressInfo} from "net";

export const app: Express = express()

app.use(express.json()); //Para as requisições de body.
app.use(cors()); //Impedir erro de cors, pois as requisições estão se conversando entre as portas do mesmo computador.

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error("Failure upon starting server.")
    }
})