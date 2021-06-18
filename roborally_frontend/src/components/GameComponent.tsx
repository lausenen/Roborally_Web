import {Game} from "../types/Game";
import {FunctionComponent, useContext} from "react";
import GameContext from "../context/GameContext";
import "../styling/GameComponent.module.scss"


export type GameComponentProps = {
    game : Game
}

export const GameComponent: FunctionComponent<GameComponentProps> = ({game}) => {
    const {selectGame} = useContext(GameContext)

    const onClickGame = async () => {
        await selectGame(game)
    }

    return(

        <div className="h1">
             <h1>{game.gameId}: {game.name}</h1>
                <button onClick={onClickGame} className="button button1">Play</button>
            <ul>
                {game.users.map((user, index) => <li>
                    {user.playerName} (no function yet)
                </li>)}
            </ul>
    </div>
    )
}