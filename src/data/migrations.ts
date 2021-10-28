import {connection} from "../data/connection";
import movies from "./movies.json";
import characters from "./characters.json";

const printError = (error: any) => {console.log(error.sqlMessage || error.message)};

const createTables = () => connection.raw(`
    CREATE TABLE movies (
        id INT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        year YEAR NOT NULL
    );

    CREATE TABLE characters (
        id INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        gender ENUM("female", "male", "other") NOT NULL,
        description VARCHAR(255)
    );
`)
        .then(() => {console.log("Tabelas criadas!")})
        .catch(printError);

const insertMovies = () => connection("movies")
    .insert(movies)
    .then(() => {console.log("Filmes criados!")})
    .catch(printError)

const insertCharacters = () => connection("characters")
    .insert(characters)
    .then(() => {console.log("Personagens criados!")})
    .catch(printError)

    const closeConnection = () => {connection.destroy()};

    createTables()
        .then(insertMovies)
        .then(insertCharacters)
        .finally(closeConnection);

