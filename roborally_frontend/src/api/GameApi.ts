import axios from "axios";
import {Board} from "../types/Board";
import {Space} from "../types/Space";
import {Game} from "../types/Game";
import {Player} from "../types/Player";

class GameApi{
    private static instance : GameApi;
    private readonly BACKEND_URL = "http://localhost:8080"
    private constructor() {}

    public static getInstance():GameApi{
        if(!GameApi.instance){
            GameApi.instance = new GameApi();
        }
        return GameApi.instance;
    }
/*

TODO Way to start game
TODO Way to create new game
 */
    public getGames() {
        return axios.get<Game[]>(`${this.BACKEND_URL}/game`).then(value =>value.data)
    }

    public createGame() {

        const game = {//game object
            name: "Test Game",
            started: true,
            users: []
        }

        this.createBoard();
        return axios.post<number>(`${this.BACKEND_URL}/game`, game).then(value =>value.data)
    }
    public createBoard(){
        const board = {//game object
            boardId : -1,
            boardName : "TestBoard",
            height : 8,
            width : 8,
            numberOfPlayers: 2
        }
        return axios.post<number>(`${this.BACKEND_URL}/board/`,board).then(value =>value.data)
    }
    public getBoard(boardId : number){
        return axios.get<Board>(`${this.BACKEND_URL}/board/${boardId}`).then(value =>value.data)
    }

    public moveCurrentPlayer(boardId : number, space : Space){
        return axios.put(`${this.BACKEND_URL}/board/${boardId}/move`,space)
    }

    public switchPlayer(boardId : number){
        return axios.put(`${this.BACKEND_URL}/board/${boardId}/switchplayer`)
    }
}

export default GameApi.getInstance()