import {createContext} from "react";
import {Board} from "../types/Board";
import {Space} from "../types/Space";
import {Game} from "../types/Game";
import {User} from "../types/User";
import {Player} from "../types/Player";

export type GameContextType = {
    games: Game[],
    selectGame: (game: Game) => Promise<void>,
    unselectGame: () => Promise<void>,
    validateUser: (name:string) => any,
    joinAsUser: (game:Game) => any,
    addPlayer: (playerName:string,playerColor:string,boardId:number,user:User) => any,
    currentUser: User,
    currentPlayer: Player,
    load: () => any,
    gamesLoaded : boolean
    loaded : boolean,
    board: Board,
    setCurrentPlayerOnSpace: (space: Space) => Promise<void>,
    switchCurrentPlayer: () => Promise<void>

}
//Define a new context of type GameContextType
//Below we define the "default" values which are set upon initialization of the context

const GameContext = createContext<GameContextType>({
    games: [],
    selectGame: async () => {},
    unselectGame: async () => {},
    load: async () => {},
    validateUser: async ()=> {},
    joinAsUser: async () => {},
    addPlayer: async () => {},
    gamesLoaded : false,
    loaded : false,
    board: {
        playerDtos: [],
        spaceDtos: [],
        boardId: -1,
        boardName: "",
        currentPlayerDto: undefined,
        height: 0,
        width: 0
    },
    currentUser: {name: "", userId: -1, displayName:"", gameId:-1},
    currentPlayer: {
        boardId: -1,
        playerId: -1,
        playerName: "Player-1",
        userId: -1,
        //The | operator is known as the "union" type, allowing us to have a property that can take different values
        // see https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types
        playerColor: "red",
    },

    setCurrentPlayerOnSpace: async () => {
    },
    switchCurrentPlayer: async () => {
    }
});

export default GameContext