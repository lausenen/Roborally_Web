import {User} from "./User";

export type Game = {
    gameId: number,
    boardName: string,
    started: boolean,
    users: User[]
}