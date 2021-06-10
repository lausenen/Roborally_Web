import {FunctionComponent, useContext} from "react";
import GameContext from "../context/GameContext";
import {GameComponent} from "../components/GameComponent";
import styles from "../styling/BoardComponent.module.scss";


type GamesComponentProps = {}
const GamesComponent: FunctionComponent<GamesComponentProps> = () => {

    const {games, loaded} = useContext(GameContext)

    return (
        !loaded ?
            <div className={styles.container}>
                <p>Hello!</p>
                <div>{ games.map((game,index) =>
        <GameComponent key={"game" + index} game={game}/>

            )
            }
        </div>
            </div>
            :
            <div/>

    )
}

export default GamesComponent