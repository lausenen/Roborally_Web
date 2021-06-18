import {FunctionComponent, useContext} from "react";
import GameContext from "../context/GameContext";
import {GameComponent} from "../components/GameComponent";
import styles from "../styling/BoardComponent.module.scss";
import GameApi from "../api/GameApi";



type GamesComponentProps = {}
const GamesComponent: FunctionComponent<GamesComponentProps> = () => {

    const {games, gamesLoaded, loaded} = useContext(GameContext)

    const onClickCreateGame = async () => {
        await GameApi.createGame()
    }

    return (
        !loaded ?(
            <div className={styles.container}>
                <div>{ games.map((game,index) =>
        <GameComponent key={"game" + index} game={game}/>
            )
            }
                    <button className="button button2" onClick={onClickCreateGame}>Create Game</button>
        </div>
            </div>)
            :
            <div/>

    )
}

export default GamesComponent