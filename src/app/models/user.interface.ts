import { IMidia } from "./midia.interface";


export interface IUser {
    name?: string;
    avatar?: string;
    favorites?: IMidia[],
    history?: IMidia[],
    search?: string[]
}