import { movie, character, GENDER } from "./types";

export const addmovies: movie[] = [
    {
        id: 3,
        title: "Cinderela",
        year: 1995
    },
    {
        id: 4,
        title: "O Rei Leão",
        year: 1993
    }
]

export const addCharacters: character[] = [
    {
        id: 4,
        name: "Cinderela",
        gender: GENDER.FEMALE
    },
    {
        id: 5,
        name: "Simba",
        gender: GENDER.MALE,
        description: "Sexy motherf***"
    },
    {
        id: 6,
        name: "Mufasa",
        gender: GENDER.MALE
    }
] 