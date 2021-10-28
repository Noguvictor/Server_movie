export type movie = {
    id: number,
    title: string,
    year: number
}

export enum GENDER {
    FEMALE = "female",
    MALE = "male",
    OTHER = "other"
}

export type character = {
    id: number,
    name: string,
    gender: GENDER,
    description?: string
}