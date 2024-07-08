import { IUser } from "./user.interface";

export interface ILogin {
    user: string;
    password: string;
    users: IUser[],
}