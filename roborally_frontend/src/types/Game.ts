import {User} from "./User";

export type Game = {
    name: string,
    gameId: number,
    started: boolean,
    numberOfUsers: number,
    users: User[]
}