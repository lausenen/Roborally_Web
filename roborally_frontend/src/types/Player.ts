import {User} from "./User";

export type Player = {
    boardId : number,
    playerId : number,
    playerName: string,
    userId: number,
    //The | operator is known as the "union" type, allowing us to have a property that can take different values
    // see https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types
    playerColor: "red" | "green" | "yellow" | "blue",
    x? : number,
    y? : number
}