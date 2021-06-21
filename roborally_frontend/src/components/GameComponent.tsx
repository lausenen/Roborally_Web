import {Game} from "../types/Game";
import {FunctionComponent, useContext} from "react";
import GameContext from "../context/GameContext";
import "../styling/GameComponent.module.scss"


export type GameComponentProps = {
    game : Game
}

export const GameComponent: FunctionComponent<GameComponentProps> = ({game}) => {
    const {selectGame, currentUser, joinAsUser} = useContext(GameContext)


    const onClickGame = async () => {
        await selectGame(game)
    }
    const onJoinGame = async () => {
        await joinAsUser(game)
    }

    return(

        <div className="h1">
             <h1>{game.gameId}: {game.name}</h1>
            <p>Joined Players ({game.users.length}/{game.numberOfUsers})</p>
            <ul>
                {game.users.map((user, index) => <li>
                    {user.name} (no function yet)
                </li>)}
            </ul>
            <p>Max amount of players: {game.numberOfUsers}</p>
                <button onClick={onJoinGame} className="button button1">Join Game</button>
                <button onClick={onClickGame} className="button button1">Start Game</button>

    </div>
    )
}