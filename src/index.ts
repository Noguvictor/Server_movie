import {app} from "./app";
import { getAllCharacters } from "./endpoints/getAllCharacters";
import { createMovie } from "./endpoints/createMovie";
import { createCharacter } from "./endpoints/createCharacter";
import { deleteCharacter } from "./endpoints/deleteCharacter";
import { getAllMovies } from "./endpoints/getAllMovies";
import { deleteMovie } from "./endpoints/deleteMovie";
import { insertMoviesCharactersRelations } from "./endpoints/insertMoviesCharactersRelations";
import { getMoviesCharactersRelations } from "./endpoints/getMovieCharactersRelations";
import { getCharactersFilter } from "./endpoints/getCharactersFilter";


app.get("/character", getAllCharacters);

app.get("/movie", getAllMovies);

app.get("/characters", getCharactersFilter);

app.post("/movie/new", createMovie);

app.post("/character/new", createCharacter);

app.delete("/character/delete/:id", deleteCharacter);

app.delete("/movie/delete/:id", deleteMovie);

app.post("/relation/new", insertMoviesCharactersRelations);

app.get("/relation", getMoviesCharactersRelations);

const title: string = "X-men: O Filme"
let year: number = 2000
console.log(`O filme "${title}" foi lançado em ${year}`)

