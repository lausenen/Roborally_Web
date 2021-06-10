import {User} from "./User";

export type Game = {
    name: string,
    id: number,
    started: boolean,
    users: User[]
}