import {Game} from "../types/Game";
import {FunctionComponent, useCallback, useContext, useState} from "react";
import GameContext from "../context/GameContext";
import "../styling/GameComponent.module.scss"


export type GameComponentProps = {
    game : Game
}

export const GameComponent: FunctionComponent<GameComponentProps> = ({game}) => {
    const {selectGame, currentUser, joinAsUser, addPlayer} = useContext(GameContext)
    const [playerChoosen, setPlayerChoosen] = useState<boolean>(false)
    const [playerName, setPlayerName] = useState<string>("Player 1")
    const [playerColor, setPlayerColor] = useState<string>("Red")

    const onClickGame = async () => {
        debugger;
        await selectGame(game)
    }
    const onJoinGame = async () => {
        await joinAsUser(game)
    }
    const onClickAddPlayer = async () => {
        addPlayer(playerName,playerColor,game.gameId,currentUser)
        setPlayerName("")
        setPlayerColor("")
        setPlayerChoosen(true)

    }

    return(

        <div className="h1">
             <h1>{game.gameId}: {game.name}</h1>
            <p>Joined Players ({game.users.length}/{game.numberOfUsers})</p>
            <ul>
                {game.users.map((user, index) => <li>
                    User {user.name}
                    {user.name===currentUser.name&&playerChoosen===false?(<div>
                        <p>Choose your layout</p>
                        <label>Name Of Player: &nbsp;
                            <input type="text" value={playerName}  onChange={event => setPlayerName(event.target.value)}/>
                        </label>
                        <br/>
                        <label>Player Color: &nbsp;
                        <input type="text" value={playerColor}  onChange={event => setPlayerColor(event.target.value)}/>
                        </label>
                        <br/>
                        <button onClick={onClickAddPlayer}>Add Player To Game!</button>
                        </div>):<div/>}
                </li>)}
            </ul>
            <p>Max amount of players: {game.numberOfUsers}</p>
                <button onClick={onJoinGame} className="button button1">Join Game</button>
                <button onClick={onClickGame} className="button button1">Start Game</button>

    </div>
    )
}