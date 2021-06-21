import axios from "axios";
import {Board} from "../types/Board";
import {Space} from "../types/Space";
import {Game} from "../types/Game";
import {Player} from "../types/Player";
import {User} from "../types/User";

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
    public createUser(name: string){
        const User = {
            name : name
        }
        return axios.post(`${this.BACKEND_URL}/user`, User).then(
            value => value.data
        )
    }

    public validateUser(name: string){
        return axios.get<User>(`${this.BACKEND_URL}/user`, {params:{name: name}}).then(
            value => value.data

        )

    }

    public getGames() {
        return axios.get<Game[]>(`${this.BACKEND_URL}/game`).then(value =>value.data)
    }

    public createGame(nameOfGame:string, width:number, height:number, playerCount:number) {

        const game = {//game object
            name: nameOfGame,
            numberOfUsers: playerCount,
            started: true,
            users: []
        }

        this.createBoard(width, height);
        return axios.post<number>(`${this.BACKEND_URL}/game`, game).then(value =>value.data)
    }

    public createBoard(width:number, height:number){
        const board = {//game object
            boardId : -1,
            boardName : "TestBoard",
            height : height,
            width : width,
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