import {FunctionComponent, useContext} from "react";
import GameContext from "../context/GameContext";
import {GameComponent} from "../components/GameComponent";
import styles from "../styling/BoardComponent.module.scss";


type GamesComponentProps = {}
const GamesComponent: FunctionComponent<GamesComponentProps> = () => {

    const {games, gamesLoaded, loaded} = useContext(GameContext)
    const {selectGame} = useContext(GameContext)


    return (
        <div>{

        !loaded ?(
            <div className={styles.container}>
                <div>{ games.map((game,index) =>
        <GameComponent key={"game" + index} game={game}/>

            )
            }
        </div>
            </div>
            )
            :
            <div></div>
}
<br/>
            { gamesLoaded ?
                (
                <button className="button button2">Create Game</button>) : <div/>}
        </div>

    )
}

export default GamesComponent