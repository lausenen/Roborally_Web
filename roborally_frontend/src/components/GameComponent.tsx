import {Game} from "../types/Game";
import React, {FunctionComponent, useContext, useState} from "react";
import GameContext from "../context/GameContext";


export type GameComponentProps = {
    game : Game
}

export const GameComponent: FunctionComponent<GameComponentProps> = ({game}) => {
    const {selectGame} = useContext(GameContext)

    const onClickGame = async () => {
        selectGame(game)
    }

    const onClickEdit = () => {
        setEdit(true)
        console.log("onClick Edit")
    }

    const[edit, setEdit] = useState(false)
    const[name, setName] = useState(game.name)


    const onChange = (React.ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value)
        console.log("Game name: " + game.name + "; new name:" + name)
    }

    const onSubmit = (React.FormEvent<HTMLFormElement>)=>{
        console.log("Game name: " + game.name + "; new name:" + name)
        setEdit(false)
    }
}
    return(
        <div>
            {!edit ?
                <div>
                    <b>{game.id}: {name}</b> &nbsp;
                    <button type="button" onClick={onClickEdit}>Edit</button>
                    &nbsp;
                    <button type="button" onClick={onClickGame}>Play</button>
                </div>
                :
                <form onSubmit={onSubmit}>
                    <input
                        name="name"
                        type="text"
                        value={name}
                        required
                        onChange={onChange}
                    />
                    <input type="submit" value={"Save name" + (name !== game.name ? " (neede)" : "")}/>
                </form>
            }
                    <div onClick={onClickGame}>
                        <h1>{game.gameId}: {game.boardName}</h1>
                        <ul>
                            {game.users.map((user, index) => <li key={index}>
                                {user.playerName} (no function yet)
                            </li>)}
                        </ul>
                    </div>
                </div>

    )


